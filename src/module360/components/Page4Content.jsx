import React from "react";

const Page4Content = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex h-full max-h-[600px] w-full max-w-[800px] flex-col justify-between rounded-2xl border-black bg-white">
      <div className="relative flex h-full w-full flex-col items-center">
        <div className="absolute z-10 mt-16 flex h-auto w-full">
          <h1 className="text-4xl font-black text-green-600 md:text-6xl lg:text-6xl xl:text-7xl">
            Controls
          </h1>
        </div>
        <div className="mt-16 flex h-full w-full flex-col items-center justify-center gap-10 px-5 text-2xl">
          <div className="flex w-full flex-row gap-5">
            <img
              src={"/assets/helpModal/autoplay.png"}
              alt="mouse"
              className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
            <p className="flex h-full w-full items-center justify-start text-xs md:text-xl lg:text-2xl">
              Share the location and view to other people through a link.
            </p>
          </div>
          <div className="flex w-full flex-row gap-5">
            <img
              src={"/assets/helpModal/fullscreen.png"}
              alt="mouse"
              className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
            <p className="flex h-full w-full items-center justify-start text-xs md:text-xl lg:text-2xl">
              This is the help button. Click this when you need a refresher for
              Adventure 360°.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page4Content;
