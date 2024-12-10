import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

export const logInAuth = createAsyncThunk("logInAuth", async (user) => {
  try {
    alert("logInAuth");
    const userCredential = await signInWithEmailAndPassword(auth,user.email,user.password);
    const docRef = doc(db,"users",userCredential.user.uid);
    const responce = await getDoc(docRef)
    return user;
  } catch (error) {
    console.log(error);
  }
});

export const UserSlice = createSlice({
  name: "UsersAuthentication",
  initialState: {
    users: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signInAuth.fulfilled, (state, action) => {
      console.log("extraReducer function call done");
      state.users = [...state.users, action.payload];
    });

    builder.addCase(logInAuth.fulfilled, (state, action) => {
      console.log("extraReducer function call done");
      state.users = [...state.users, action.payload];
    });
  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
