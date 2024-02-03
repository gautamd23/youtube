import React from "react";
import { useSelector } from "react-redux";

export default function WatchCard({ searchParams }) {
  const watchVideo = useSelector((store) => store?.video?.watch);
  console.log(watchVideo);
  const { snippet,channelTitle } = watchVideo;
  console.log(snippet)
    const { title, thumbnails } = snippet;
  return (
    <div className="">
      <div>
        <iframe
          className="rounded-lg"
          width="700"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="py-3 font-bold text-xl w-[700px]">{title}</div>
      <div>{channelTitle}</div>
    </div>
  );
}
