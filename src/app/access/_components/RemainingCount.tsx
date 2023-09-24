"use client";
import { useContext } from "react";
import { CountContext } from "@/context/WaitlistCountContext";

export default function Count() {
  const { count } = useContext(CountContext);

  if (count) return 10000 - count;
  return "____";
}
