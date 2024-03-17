import React from "react";
import { IoIosClose } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";

const Try = ({ visible, onClose }) => {
  const handleCloseAndReset = () => {
    onClose();
    resetState();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={null}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25"
    >
      <div className="flex h-full w-full items-center justify-center rounded p-2">
        <div className="flex h-auto w-full max-w-[800px] flex-col rounded-2xl border border-black bg-white pt-12">
          <div className="flex h-auto flex-row items-start justify-between px-12">
            <button
              className="flex items-center justify-center rounded-full bg-green-700 p-2 text-white"
              onClick={handleCloseAndReset}
            >
              <LuGraduationCap className="h-12 w-12" />
            </button>
            <div className="flex flex-col gap-4 px-4">
              <h1 className="text-2xl font-bold">
                Department of Information and Technology
              </h1>
              <p className="w-fit items-center rounded-full bg-orange-500 px-4 py-1 font-bold">
                CEIT
              </p>
            </div>

            <div className="relative flex h-fit flex-col">
              <img
                src="/assets/360_buttons/placeholder.png"
                className="aspect-square  rounded-full"
                alt="tite"
              />
              <button
                className="absolute bottom-0 flex w-full items-center justify-center rounded-full bg-green-500 px-4 py-1 font-bold"
                onClick={handleCloseAndReset}
              >
                Explore
              </button>
            </div>
            <button
              className="flex items-center justify-center"
              onClick={handleCloseAndReset}
            >
              <IoIosClose className="h-12 w-12" />
            </button>
          </div>
          <div className="flex h-full w-full flex-col justify-between gap-6 px-32 py-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex items-start gap-4">
              <button
                className="flex w-fit items-center justify-center rounded-full bg-green-500 px-4 py-1 font-bold"
                onClick={handleCloseAndReset}
              >
                Explore
              </button>
              <button
                className="flex w-fit items-center justify-center rounded-full bg-green-500 px-4 py-1 font-bold"
                onClick={handleCloseAndReset}
              >
                Explore
              </button>
              <button
                className="flex w-fit items-center justify-center rounded-full bg-green-500 px-4 py-1 font-bold"
                onClick={handleCloseAndReset}
              >
                Explore
              </button>
              <button
                className="flex w-fit items-center justify-center rounded-full bg-green-500 px-4 py-1 font-bold"
                onClick={handleCloseAndReset}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Try;
