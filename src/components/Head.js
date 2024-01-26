import React from "react";
import hamImg from '../Assets/hamburger.png';
import userLogo from "../Assets/user.png"
export default function Head() {
  return (
    <div className="px-3 pt-3 w-full flex justify-between items-center">
      <div className="flex gap-8">
        <img className="w-5" src={hamImg} />
        <img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"></img>
      </div>
      <div>
        <input className="border-2 w-[580px] py-1 rounded-l-full" type="text" ></input>
        <button className="border-2 bg-gray-100 px-2 py-1 rounded-r-full">Search</button>
      </div>
      <div>
        <img className="w-8 mr-2" src={userLogo}></img>
      </div>
    </div>
  );
}
