import React from "react";

export default function SideBar() {
  return (
    <div className="w-[14%]">
      <div className="px-3 pb-1 py-2">
        <ul className="py-1 text-sm">
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <hr className=""></hr>
      </div>

      <div className="px-3 pb-1 py-2">
        <ul className="py-1 text-sm">
          <li>You</li>
          <li>History</li>
        </ul>
        <hr></hr>
      </div>
      <div className="px-3 pb-1 py-2">
        <ul className="py-1 text-sm">
          <li className=" text-xs">
            Sign in to like videos, comment, and subscribe.
          </li>
          <li>
            <button className="border-2 text-xs py-1 px-2 mt-2 mb-1 text-blue-800 border-gray-300 rounded-full">
              Sign In
            </button>
          </li>
        </ul>
        <hr></hr>
      </div>
      <div className="px-3 pb-2 py-2">
        <h1 className="font-bold">Explore</h1>
        <ul className="py-1 text-sm">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Movies</li>
          <li>Music</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
        </ul>
      </div>
    </div>
  );
}
