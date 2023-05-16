import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: Coffee
index: number
};

export default function CoffeeCardV2({ data, index }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-between w-5/6 h-full shadow-xl rounded-lg p-2 drop-shadow-lg">
      <div className="w-full p-2 rounded-xl h-1/2">
        <Image
          src={`/coffee${Number(index)+1}.jpg`}
          alt="Coffee"
          width={250}
          height={250}
          className="object-cover h-full mx-auto"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full px-6 py-2 border-t rounded-b-lg border-t-coffee-950 h-1/2">
        <div>
          <div className="flex flex-row flex-wrap w-full">
            <div className="flex flex-row items-center justify-start px-4 py-1 mt-2 mr-2 rounded-full w-fit bg-emerald-900 text-emerald-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-emerald-200"
              >
                <path d="M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"></path>
                <path d="M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"></path>
              </svg>
              <div className="ml-2">{data.roast}</div>
            </div>
            <div className="flex flex-row items-center justify-start px-4 py-1 mt-2 mr-2 rounded-full text-rose-200 bg-rose-900 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-rose-200"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-2">{data.origin_1}</div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-lg font-semibold text-coffee-950">
            {data.name}
          </div>
          <div className="text-lg font-semibold text-coffee-900">
            {data.roaster}
          </div>
        <div className="flex justify-end w-full">
        <Link
          href={`./coffees/${encodeURI(data.name)}`}
          className="flex justify-between px-2 py-2 text-center text-coffee-200 bg-coffee-800 rounded-lg w-36 hover:bg-coffee-700"
        >
          <div>Learn More</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        </div>
      </div>
    </div>
  );
}
