import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlaceLabel, RoastLabel } from "./ui/label";
import Text from "./ui/text";

type Props = {
  data: Coffee;
  index: number;
};

export default function CoffeeCardV2({ data, index }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-between w-full max-h-full p-2 rounded-lg shadow-2xl min-h-fit lg:w-5/6 bg-coffee-50">
      <div className="w-full p-2 rounded-xl h-1/2">
        <Image
          src={`/coffee${Number(index) + 1}.jpg`}
          alt="Coffee"
          key={index}
          width={250}
          height={250}
          className="object-cover h-full mx-auto"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full px-6 py-2 border-t rounded-b-lg border-t-coffee-950 h-1/2">
        <div>
          <div className="flex flex-row flex-wrap w-full">
            <RoastLabel roast={data.roast} />
            <div className="hidden xl:block"><PlaceLabel origin={data.origin_1} /></div>
            <div className="hidden xl:block"><PlaceLabel origin={data.origin_2} /></div>
          </div>
        </div>
        <div className="mt-2">
          <Text size={"xl"} weight={"semibold"} color="black">{data.name}</Text>
        </div>
        <Text size={"lg"} weight={"semibold"} color="primary-800">{data.roaster}</Text>
        <div className="flex justify-end w-full">
          <Link
            href={`./coffees/${encodeURI(data.name)}`}
            className="flex justify-between px-2 py-2 mt-4 text-center text-white rounded-lg bg-coffee-800 w-44 hover:bg-coffee-700"
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
