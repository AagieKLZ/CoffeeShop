import React from "react";

type Props = {};

export default function Filters({}: Props) {
  return (
    <form className="flex items-center justify-around w-full px-2 mt-4">
      <div className="flex">
        <label htmlFor="roast" className="py-1 mr-2 text-lg text-orange-900">
          Roast
        </label>
        <select
          name="roast"
          id="roast"
          className="px-3 py-1 border border-orange-900 rounded-lg"
        >
          <option value="">All</option>
          <option value="Dark">Dark</option>
          <option value="Medium">Medium</option>
          <option value="Light">Light</option>
          <option value="Medium-Dark">Medium-Dark</option>
          <option value="Medium-Light">Medium-Light</option>
        </select>
      </div>
      <div className="flex">
        <label htmlFor="origin" className="py-1 mr-2 text-lg text-orange-900">
          Origin
        </label>
        <select
          name="origin"
          id="origin"
          className="px-3 py-1 border border-orange-900 rounded-lg"
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Central America">Central America</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
        </select>
      </div>
      <div className="flex">
        <label htmlFor="sort" className="py-1 mr-2 text-lg text-orange-900">
          Order By
        </label>
        <select
          name="sort"
          id="sort"
          className="px-3 py-1 border border-orange-900 rounded-lg"
        >
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="g_USD">Price</option>
          <option value="roaster">Roaster</option>
        </select>
        
            <input type="checkbox" name="desc" id="desc" className="hidden" />
        <label htmlFor="desc" className="py-1 ml-2 arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 fill-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </label>
      </div>
      <div className="relative flex items-center">
        <button
          type="submit"
          className="absolute z-50 pr-2 bg-white border-r left-2 border-r-orange-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-orange-900 left-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          type="search"
          name="query"
          id="query"
          className="py-1 pl-12 pr-1 border border-orange-900 rounded-lg accent-white"
        />
      </div>
      <button className="w-32 py-1 font-semibold text-orange-100 bg-orange-700 rounded-lg hover:bg-orange-800 active:bg-orange-900">
        Search
      </button>
    </form>
  );
}
