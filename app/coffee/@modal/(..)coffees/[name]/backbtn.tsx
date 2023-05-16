"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

export default function BackBtn({}: Props) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  useEffect(() => {
    window.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            router.back();
        }
        }
    );
  })
  return (
    <button onClick={onClick} onKeyDown={e => console.log(e.key)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
