import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
};

export function PricingComponent({ children, ...props }: Props) {
  return (
    <div className="flex lg:flex-col flex-row justify-start items-center lg:h-[75vh] h-[40vh] min-h-fit lg:w-1/3 w-full drop-shadow-xl" {...props}>
      {children}
    </div>
  );
}

export function PricingHead({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center w-1/3 h-full bg-coffee-300 lg:w-full lg:h-1/4 lg:rounded-t-xl rounded-l-xl">
      <h2 className="text-xl font-semibold text-center text-coffee-900 lg:text-3xl">{name}</h2>
    </div>
  );
}

export function PricingBody({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full px-4 py-4 bg-coffee-200 overflow-clip lg:py-12 lg:h-3/4 lg:rounded-b-xl rounded-r-xl">
      {children}
    </div>
  );
}

export function PricingItem( props : { name: string, new?: boolean | undefined }) {
  return (
    <div className="flex items-center justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 min-w-fit fill-coffee-900"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
      <span className="ml-4 text-sm font-normal text-coffee-900 lg:text-lg">{props.name}</span>
        {props.new && <span className="px-2 ml-2 rounded-full text-md bg-rose-800 text-rose-100">New</span>}
    </div>
  );
}
