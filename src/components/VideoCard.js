import React from "react";

export default function VideoCard({ info }) {
  const { snippet, statistics ,id} = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  }
  return (
    <div className="w-[350px] mr-4 py-4 ">
      <img className="rounded-lg w-full" src={thumbnails?.maxres?.url}></img>
      <ul>
        <li className="font-bold ">{title.substring(0, 50) + "..."}</li>
        <li className="text-sm py-1 text-gray-600">{channelTitle}</li>
        <li className="text-sm  text-gray-600">
          {convertToInternationalCurrencySystem(viewCount)} views 
        </li>
      </ul>
    </div>
  );
}
