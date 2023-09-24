"use client";
import { useRef, useState, useEffect } from "react";
import { MuiTelInput } from "mui-tel-input";
import TextField from "@mui/material/TextField";
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
  const [phoneNo, setPhoneNo] = useState<string | undefined>(undefined);
  const { setCount } = React.useContext(CountContext);

  const router = useRouter();

  const handleChange = (newValue: string | undefined) => {
    setPhoneNo(newValue);
  };

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (linkedInRef.current && linkedInRef.current.value && phoneNo) {
        const userCredential = await signInAnonymously(auth);
        if (userCredential.user) {
          const countRef = doc(db, "count", "count");
          await addDoc(collection(db, "leads"), {
            linkedInProfile: linkedInRef.current.value,
            phone: phoneNo,
          });
          await updateDoc(countRef, {
            count: increment(1),
          });
          setCount((prev) => (prev ? prev + 1 : 1));
          linkedInRef.current.value = "";
          setPhoneNo(undefined);
          router.push("/access/thankyou");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => submitForm(e)}
    >
      {/* Inputs */}
      <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
        <TextField
          inputRef={linkedInRef}
          required
          id="outlined-basic"
          label="LinkedIn profile URL"
          variant="outlined"
          inputProps={{
            pattern: ".*linkedin\\.com.*",
            title: "Must be a LinkedIn address",
          }}
        />

        {/* Phone no. */}
        <MuiTelInput
          required
          value={phoneNo}
          onChange={handleChange}
          placeholder="Phone no."
          disableDropdown
          defaultCountry="GB"
          forceCallingCode
        />
      </div>

      {/*Info  */}
      <p className="italic text-sm text-center">
        {" "}
        We&apos;ll text you the app link on launch day. As we&apos;re an exclusive
        platform, we require LinkedIn to verify professional status.
      </p>

      {/* Submit form */}
      <button
        type="submit"
        className={
          "bg-gold px-10 py-2 rounded-full text-lg font-bold w-full md:w-auto shadow-2xl hover:shadow-inner"
        }
      >
        Join waitlist
      </button>
    </form>
  );
}
