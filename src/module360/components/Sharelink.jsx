import React from "react";
import { IoIosClose } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

const Sharelink = ({ visible, onClose }) => {
  if (!visible) return null;

  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("URL copied to clipboard: " + currentUrl);
      })
      .catch((error) =>
        console.error("Error copying URL to clipboard: ", error),
      );
  };

  return (
    <div
      id="container"
      onClick={null}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 px-4"
    >
      <div className="relative flex  flex-col rounded-lg bg-white p-2">
        <div className="flex h-auto w-full flex-row items-center">
          <div className="relative flex w-full flex-row-reverse items-center justify-items-end">
            <div className="relative flex items-end justify-items-end">
              <button
                className="mb-auto mt-auto flex items-end justify-center"
                onClick={onClose}
              >
                <IoIosClose className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </button>
            </div>
            <div className="mt-4 flex h-full w-full items-center justify-center">
              <p className="text-xl text-green-600 sm:text-xl md:text-3xl lg:text-4xl">
                Share what you see!
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 flex  h-full w-full items-center justify-between gap-4 px-6 sm:my-2 md:my-4 lg:my-4">
          <div className="flex h-full w-[12%] items-center justify-center rounded-lg bg-gray-200 p-4 text-green-600 ">
            <button onClick={copyToClipboard} className="">
              <MdContentCopy className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </button>
          </div>
          <div className="flex h-full w-full items-center rounded-lg bg-gray-200 p-4">
            <p className="sm:2xl md:2xl lg:3xl text-xs text-gray-700">
              {currentUrl}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharelink;
