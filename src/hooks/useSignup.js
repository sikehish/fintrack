import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
// import { collection, query, where } from "firebase/firestore";
import React from "react";
import validator from "validator";
import { useState } from "react";

function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (name, email, password, cpassword) => {
    setError(null);
    setIsPending(true);
    try {
      if (name.trim() === "") throw new Error("Name left empty");
      if (!validator.isEmail) throw new Error("Invalid Email");
      if (password !== cpassword) throw new Error("Password not matching");
      if (password.length < 6)
        throw new Error("Password should have atleast 6 characters");

      //   fetchSignInMethodsForEmail(auth, email).then((result) => {
      //     console.log(result);
      //   });

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) throw new Error("Signup failed:(");
      console.log(res.user);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      setIsPending(false);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsPending(false);
    }
  };
  return { signup, isPending, error };
}

export default useSignup;
