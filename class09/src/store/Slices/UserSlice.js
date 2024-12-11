import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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



export const getCurrentUser = createAsyncThunk(
    "getCurrentUser",
    async ()=>
    {
        try {
            const user = auth.currentUser;
            if(user)
            {
                return user;
            }
        } catch (error) {
            console.log(error.message)
        }
    }
)



export const signInAuth = createAsyncThunk("signInAuth", async (user) => {
  try {
    alert("signInAuth");
    const userCredential = await createUserWithEmailAndPassword(auth,user.email,user.password)
    const response = await setDoc(doc(db,"Users",userCredential.user.uid),user)
    

    return {...user,id:userCredential.user.uid};
  } catch (error) {
    console.log(error);
  }
});








export const logOutAuth = createAsyncThunk(
    "logOutAuth",
    async ()=>
    {
        try {
            await signOut(auth);
            return true;
        } catch (error) {
            console.log(error.message)
            
        }
    }
)









export const logInAuth = createAsyncThunk("logInAuth", async (user) => {
    try {
      alert("logInAuth");
  
      // Step 1: Sign in the user
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      alert(userCredential.user.uid)
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
      console.log("Error in logInAuth:", error.message);
      throw error; // Re-throw the error to be handled in the rejected action
    }
  });

export const UserSlice = createSlice({
  name: "UsersAuthentication",
  initialState: {
    users: null
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signInAuth.fulfilled, (state, action) => {
      console.log("extraReducer function call done",action.payload);
      
    });

    builder.addCase(logInAuth.fulfilled, (state, action) => {
      console.log("extraReducer function call done");
      state.users = action.payload;
    });


    builder.addCase(logOutAuth.fulfilled, (state, action) => {
        console.log("extraReducer function call done", action.payload);
        state.users = null
      });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
        console.log("extraReducer function call done", action.payload);
        state.users = action.payload
      });
  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
