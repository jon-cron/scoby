import { useState, useEffect } from "react";
import { auth, storage, db } from "../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuthContext } from "../context/auth_context.js";
export const useRegister = () => {
  const [registerError, setRegisterError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (email, password, displayName, profileImg) => {
    setRegisterError(null);
    setIsPending(true);
    try {
      //create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      //check for the user
      if (!res) {
        throw new Error("Could not register");
      }
      const uploadPath = `profileImgs/${res.user.uid}/${profileImg.name}`;
      //make storage upload path for image
      const uploadRef = ref(storage, uploadPath);
      console.log("uploadRef", uploadRef);
      //get a ref for the uploaded img
      // NOTE this is working!!!!
      const img = await uploadBytesResumable(uploadRef, profileImg);
      console.log("img", img);
      //get download url for db
      // NOTE all I had to do was use the upload path Reference!!!!!!!
      const imgUrl = await getDownloadURL(uploadRef);
      console.log("imgUrl", imgUrl);
      updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: imgUrl,
      });
      //attach other categories to our user
      const usersRef = collection(db, "users");
      await addDoc(usersRef, {
        id: res.user.uid,
        displayName: displayName,
        photoURL: imgUrl,
      });
      dispatch({ type: "LOGIN", payload: res.user });
      if (!isCancelled) {
        setIsPending(false);
        setRegisterError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setRegisterError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { register, registerError, isPending };
};
