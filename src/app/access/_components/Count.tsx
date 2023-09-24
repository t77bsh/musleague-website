"use client";
import { useContext } from "react";
import { CountContext } from "@/context/WaitlistCountContext";
import { Skeleton } from "@mui/material";

export default function Count() {
  const { count } = useContext(CountContext);

  return count || "____";
}
