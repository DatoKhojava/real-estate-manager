"use client";

import Image from "next/image";

function ShowPrew({ preview, handleDelete }: any) {
  return (
    <>
      {preview ? (
        <div className="relative">
          <Image
            src={preview}
            alt="Preview"
            width="192"
            height="200"
            className="object-contain"
          />
          <button
            onClick={handleDelete}
            className="absolute -bottom-2 -right-3 bg-white text-black border-black border rounded-full p-1 hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7L5 7M10 11V17M14 11V17M5 7L6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19L19 7M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7"
              />
            </svg>
          </button>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      )}
    </>
  );
}

export default ShowPrew;
