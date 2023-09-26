"use client";
import { useContext } from "react";
import { CountContext } from "@/context/WaitlistCountContext";

export default function Count() {
  const { count } = useContext(CountContext);

  if (count) return 5000 - count;
  return "____";
}
