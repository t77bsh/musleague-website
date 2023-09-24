"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface CountContextProps {
  count: number | null;
  setCount: React.Dispatch<React.SetStateAction<number | null>>;
}

export const CountContext = createContext<CountContextProps>({
  count: null,
  setCount: () => {},
});

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const docRef = doc(db, "count", "count");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const count = docSnap.data().count;
        if (typeof count === "number") {
          setCount(count);
        }
      } else {
        console.log("No such document!");
      }
    };
    fetchCount();
  }, []);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
