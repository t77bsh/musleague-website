"use client";
import React from "react";

import { Skeleton } from "@mui/material";
import { CountContext } from "@/context/WaitlistCountContext";

function WaitlistCount() {
  const { count } = React.useContext(CountContext);

  return (
    <div className="text-center space-y-2">
      <p>Currently on the waitlist</p>
      <p className="bg-green-50 text-5xl rounded-lg p-5 relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1.5 text-xs bg-red-500 rounded-full px-1 text-white">
          Live Count
        </span>
        {count || <Skeleton animation="wave" height={70} />}
      </p>
    </div>
  );
}

export default WaitlistCount;
