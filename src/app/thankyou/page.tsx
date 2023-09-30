"use client";
import React from "react";
import { Button } from "@mui/material";
import Confetti from "react-dom-confetti";
const config = {
  angle: 90,
  spread: 90,
  startVelocity: 100,
  elementCount: 10000,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: [
    "#a864fd",
    "#29cdff",
    "#20e39e",
    "#e0feff",
    "#78ff44",
    "#ff718d",
    "#fdff6a",
  ],
};

function ThankYouPage() {
  const [isExploding, setIsExploding] = React.useState(false);
  React.useEffect(() => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen star-bg flex flex-col justify-center items-center text-center">
      <Confetti active={isExploding} config={config} />

      <div className="bg-green-200 p-10 flex flex-col gap-y-5  rounded-md shadow-xl">
        <h1 className="text-5xl font-extrabold">🎉 Thank You! 🎉</h1>

        <div className="text-gray-700 text-lg">
          <p>
            We are humbled and thrilled to have you on board. Your trust in us
            is a step closer to creating a cherished community of Muslim
            professionals finding love. You are on the waitlist! We&apos;ll let
            you know when the mobile app launches!
          </p>
          <p className="text-xl font-semibold">- ❤️ The Musleague Team</p>
        </div>
        <div>
          <Button href="/" variant="text">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
