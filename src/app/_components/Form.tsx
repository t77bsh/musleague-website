"use client";
import { useRef, useState } from "react";
import {
  doc,
  increment,
  updateDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { db, auth } from "@/firebaseConfig";

import { CountContext } from "@/context/WaitlistCountContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Form() {
  const linkedInRef = useRef<HTMLInputElement | null>(null);
  const { setCount } = React.useContext(CountContext);

  const router = useRouter();

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (linkedInRef.current && linkedInRef.current.value) {
        const userCredential = await signInAnonymously(auth);
        if (userCredential.user) {
          const countRef = doc(db, "count", "count");
          await addDoc(collection(db, "leads"), {
            linkedInProfile: linkedInRef.current.value,
          });
          await updateDoc(countRef, {
            count: increment(1),
          });
          setCount((prev) => (prev ? prev + 1 : 1));
          linkedInRef.current.value = "";
          router.push("/thankyou");
        }
      } else {
        alert("Please enter a valid LinkedIn profile link.");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      onSubmit={(e) => submitForm(e)}
      className="space-y-3 lg:w-full lg:relative"
    >
      <input
        ref={linkedInRef}
        autoFocus
        required
        aria-required
        type="text"
        pattern=".*linkedin\.com.*"
        title="Must be a LinkedIn address"
        placeholder="LinkedIn profile link"
        className="rounded-full px-4 h-12 md:h-16 md:text-lg w-full shadow"
      />
      <button
        type="submit"
        className="font-medium hover:scale-105 rounded-full whitespace-nowrap shadow bg-gold text-white w-full px-2 h-12 md:static md:h-[70px] md:text-lg lg:absolute lg:-right-1 lg:-bottom-1 lg:w-5/12 lg:font-bold xl:text-xl"
      >
        Free lifetime access -&gt;
      </button>
    </form>
  );
}
