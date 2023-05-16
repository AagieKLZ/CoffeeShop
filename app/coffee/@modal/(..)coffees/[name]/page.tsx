import AmountField from "@/components/amountField";
import prisma from "@/prisma/client";
import React from "react";
import Image from "next/image";
import BackBtn from "./backbtn";
import BackBg from "./backbg";

const getCoffee = async (name: string): Promise<Coffee | null> => {
  prisma.$connect();
  const data = (await prisma.coffee.findFirst({
    where: {
      name: name,
    },
  })) as unknown as Coffee;
  prisma.$disconnect();
  if (!data) return null;
  if (data && data.rating) {
    data.rating = Number(data.rating?.toString());
  }
  return data as unknown as Coffee satisfies Coffee;
};

export default async function Page({ params }: { params: { name: string } }) {
  const coffee = await getCoffee(decodeURI(params.name));
  console.log(decodeURI(params.name));
  if (coffee) {
    return (
      <>
        <div className="fixed inset-0 z-[100] w-screen h-screen bg-gray-700 bg-opacity-25 flex justify-center items-center">
          <div className="fixed w-[90%] left-[5%] top-[5%] h-[90%] z-[200] bg-yellow-50 rounded-lg shadow-lg flex xl:flex-row flex-col justify-between items-center py-8">
            <div className="absolute right-4 top-4">
              <BackBtn />
            </div>
            <div className="xl:w-1/2 w-2/3 h-full py-4 xl:h-[50vh] px-4 animate-in slide-in-from-left-1/2 duration-200">
              <Image
                src="/beans.jpg"
                alt="Coffee"
                width={1200}
                height={1000}
                className="object-cover h-[50vh]"
              />
            </div>
            <div className="flex flex-col w-full h-full px-12 duration-200 border-l-2 xl:w-1/2 border-l-coffee-500 animate-in slide-in-from-right-1/2">
              <div className="w-full text-2xl font-semibold text-left text-coffee-900">
                {coffee.name}
              </div>
              <div className="w-full italic font-semibold text-left text-coffee-800 text-md">
                {coffee.roaster}
              </div>
              <div className="flex flex-row flex-wrap w-full my-4">
                <div className="flex flex-row items-center justify-start px-4 py-1 mt-4 mr-4 rounded-full w-fit bg-emerald-900 text-emerald-200">
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
                  <div className="ml-2">{coffee.roast}</div>
                </div>
                <div className="flex flex-row items-center justify-start px-4 py-1 mt-4 mr-4 rounded-full text-rose-200 bg-rose-900 w-fit">
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
                  <div className="ml-2">{coffee.origin_1}</div>
                </div>
                <div className="flex flex-row items-center justify-start px-4 py-1 mt-4 mr-4 rounded-full text-rose-200 bg-rose-900 w-fit">
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
                  <div className="ml-2">{coffee.origin_2}</div>
                </div>
                <div className="flex flex-row items-center justify-start px-4 py-1 mt-4 text-blue-200 bg-blue-900 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="ml-2">{coffee.g_USD}$ / 100g</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl text-rose-700">★</span>
                <span className="text-3xl text-rose-700">★</span>
                <span className="text-3xl text-rose-700">★</span>
                <span className="text-3xl text-rose-700">★</span>
                <span className="text-3xl text-gray-300">★</span>
                <div className="ml-4 text-2xl font-semibold text-rose-700">
                  {(coffee.rating / 20).toFixed(1)}
                </div>
              </div>
              <div className="mt-4 text-coffee-800 text-light">
                {coffee.desc_2}
              </div>
              <div className="flex flex-col mt-8 border-t border-t-coffee-800">
                <AmountField
                  pack="200g Pack"
                  price={Number((coffee.g_USD * 2).toFixed(2))}
                  base={Number(coffee.g_USD.toFixed(2))}
                />
                <AmountField
                  pack="400g Pack"
                  price={Number((coffee.g_USD * 4 * 0.95).toFixed(2))}
                  base={Number((coffee.g_USD * 0.95).toFixed(2))}
                />
                <AmountField
                  pack="600g Pack"
                  price={Number((coffee.g_USD * 6 * 0.9).toFixed(2))}
                  base={Number((coffee.g_USD * 0.9).toFixed(2))}
                />
                <AmountField
                  pack="800g Pack"
                  price={Number((coffee.g_USD * 8 * 0.85).toFixed(2))}
                  base={Number((coffee.g_USD * 0.85).toFixed(2))}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Error</div>;
  }
}
