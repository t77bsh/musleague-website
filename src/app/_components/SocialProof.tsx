"use client";
import React from "react";
import { BounceLoader } from "react-spinners";
import { useContext } from "react";
import { CountContext } from "@/context/WaitlistCountContext";



function getTimeDifference(): number {
  const now = new Date();
  const updateTimes = [9, 12, 15, 18, 21, 24]; // These are the hours for the update times

  // Find the most recent update time
  const lastUpdateTimeHour = updateTimes.reverse().find((hour) => {
    const lastUpdateTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour
    );
    return now >= lastUpdateTime;
  });

  // If none of the update times are before the current time, use the last update time from yesterday
  if (lastUpdateTimeHour === undefined) {
    const lastUpdateTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
      24
    );
    return (now.getTime() - lastUpdateTime.getTime()) / 60000; // Convert milliseconds to minutes
  }

  const lastUpdateTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    lastUpdateTimeHour
  );
  return (now.getTime() - lastUpdateTime.getTime()) / 60000; // Convert milliseconds to minutes
}

export default function SocialProof() {
  const [minutesAgo, setMinutesAgo] = React.useState<number>(getTimeDifference());
  const { count } = useContext(CountContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMinutesAgo((prevMinutesAgo) => prevMinutesAgo + 1 / 60); // Increment by 1 minute every minute
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const timeAgo =
    minutesAgo < 1
      ? `${Math.round(minutesAgo * 60)} seconds ago`
      : minutesAgo < 60
      ? `${Math.round(minutesAgo)} minutes ago`
      : `${Math.round(minutesAgo / 60)} hours ago`;

  if (!count) return null;

  return (
    <div className="bg-white flex gap-x-3 rounded-full w-[300px] mx-auto md:absolute shadow md:right-10 md:bottom-10 items-center pl-6 py-2 mb-4">
      {/* Spinner */}
      <BounceLoader color="#1897F4" size={20} />

      <div className="flex flex-col gap-y-2 cursor-default">
        {/* Verified */}
        <div className="text-[9px] text-gray-500">
          Verified by ⚡️ <span className="text-[#1897F4]">Launchly</span>
        </div>

        {/* Count */}
        <div className="text-sm font-medium text-gray-700">
          <span className="text-[#1897F4]">{count}</span> sign ups so far!
        </div>

        {/* Last updated */}
        <div className="text-[9px] text-gray-500">
          Last updated: <span className="font-medium">{timeAgo}</span>
        </div>
      </div>
    </div>
  );
}
