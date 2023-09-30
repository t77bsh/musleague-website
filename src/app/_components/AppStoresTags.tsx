import React from "react";

function AppStoresTags() {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row mx-auto md:mx-0 gap-x-10 w-fit cursor-default">
      {/* Coming soon to App Store button */}
      <div className="bg-black border-2 border-gray-500 flex items-center gap-x-4 rounded-md text-white p-4 w-[200px] shadow-lg">
        <div>
          <img src="./apple_logo.svg" alt="Apple icon" className="w-[25px]" />
        </div>
        <div className="flex flex-col">
          <div className="text-xs">Coming soon to the</div>
          <div className="text-base font-semibold">App Store</div>
        </div>
      </div>

      {/* Coming soon to Play Store button */}
      <div className="bg-black border-2 border-gray-500 flex items-center gap-x-4 rounded-md text-white p-4 w-[200px] shadow-lg">
        <div>
          <img
            src="./google_play_logo.svg"
            alt="Google Play Store Icon"
            className="w-[25px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xs">Coming soon to</div>
          <div className="text-base font-semibold">Google Play</div>
        </div>
      </div>
    </div>
  );
}

export default AppStoresTags;
