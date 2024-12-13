import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
  getDoc
} from "firebase/firestore";

let skipAuthStateChange = false;


export const getCurrentUser = createAsyncThunk(

    "getCurrentUser",
     (data,store)=>
    {
        try {
          store.dispatch(setLoading(true));
            onAuthStateChanged(auth,async(user) =>
            {

              if (skipAuthStateChange) {
                console.log("Skipping onAuthStateChanged logic.");
                return; // Listener will not proceed
              }
              else
              {
                if(user)
                  {
                    const uid  = user.uid;
                    const docSnap = await getDoc(doc(db,"Users",uid));
                    const userData = {...docSnap.data(),id:docSnap.id};
                    store.dispatch(setUser(userData))
                    store.dispatch(setLoading(false));
                    
    
                  }
                  else
                  {
                    store.dispatch(setLoading(false));
                  }
              }

              
              

            })
        } catch (error) {
            console.log(error.message)
        }
    }
)



export const signInAuth = createAsyncThunk("signInAuth", async (user) => {
  try {
    // alert("signInAuth");
    skipAuthStateChange = true; // Disable listener
    const userCredential = await createUserWithEmailAndPassword(auth,user.email,user.password)
    const response = await setDoc(doc(db,"Users",userCredential.user.uid),user)
    

    // return {...user,id:userCredential.user.uid};
  } catch (error) {
    console.log(error);
  }
});








export const logOutAuth = createAsyncThunk(
    "logOutAuth",
    async (raw,store)=>
    {
      store.dispatch(setLoadingLogin(true));
        try {
            await signOut(auth);
            return true;
        } catch (error) {
            console.log(error.message)
            
        }
    }
)









export const logInAuth = createAsyncThunk("logInAuth", async (user,store) => {
    try {
      store.dispatch(setLoadingLogin(true))
      // Step 1: Sign in the user
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      // alert(userCredential.user.uid)
      // Step 2: Fetch the document for the authenticated user using UID
      const docSnap = await getDoc(doc(db, "Users", userCredential.user.uid)); // Reference to the document

  
      // Step 3: Check if the document exists and return its data
      if (docSnap.exists()) {
        console.log(docSnap.data()); // Log the document data
        return { ...docSnap.data(), id: userCredential.user.uid }; // Return data with UID
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      store.dispatch(setLoadingLogin(false))
      alert("Error in logInAuth:", error.message);
      throw error; // Re-throw the error to be handled in the rejected action
    }
  });

export const UserSlice = createSlice({
  name: "UsersAuthentication",
  initialState: {
    users: null,
    Loading: false,
    LoadingLogin: false
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    
    setLoading: (state,action) => {
      state.Loading = action.payload;
    },

    setLoadingLogin: (state,action) => {
      state.LoadingLogin = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(signInAuth.fulfilled, (state, action) => {
      console.log("extraReducer function call done",action.payload);
      
    });

    builder.addCase(logInAuth.fulfilled, (state, action) => {
      console.log("extraReducer function call done");
      state.users = action.payload;
      state.LoadingLogin = false
    });


    builder.addCase(logOutAuth.fulfilled, (state, action) => {
        console.log("extraReducer function call done", action.payload);
        state.users = null
        state.LoadingLogin = false
      });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
        // alert("builder",action.payload.id)
        console.log("extraReducer function call done", action.payload);
        state.users = action.payload
      });
  },
});

export const {setUser,setLoading,setLoadingLogin} = UserSlice.actions;
export default UserSlice.reducer;
