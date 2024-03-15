import React from 'react'
import { IoIosClose } from 'react-icons/io'


const Try = ({ visible, onClose }) => {

  const handleCloseAndReset = () => {
    onClose();
    resetState();
  };

  if (!visible) return null;
  
  return (
    <div
    onClick={null}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 px-2">
      <div className='flex bg-white'>
      <button
              className="flex items-center justify-center"
              onClick={handleCloseAndReset}
            >
        <IoIosClose className="h-12 w-12" />
      </button>
      </div>
    </div>
  )
}

export default Try;