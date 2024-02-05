import React from "react";
import { useSelector } from "react-redux";
import like from '../Assets/like.png';
import dislike from '../Assets/dislike.jpg'

export default function WatchCard({ searchParams }) {
  const watchVideo = useSelector((store) => store?.video?.watch);
  console.log(watchVideo?.snippet);
//   const { snippet,channelTitle } = watchVideo;
//   console.log(snippet)
//     const { title, thumbnails } = snippet;
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
      <div className="py-3 font-bold text-xl w-[700px]">{watchVideo?.snippet.title}</div>
      <div>{watchVideo?.snippet.channelTitle}</div>
      <div className="flex">
        <div>
            <button>Subscribe</button>
        </div>
        <div>
            <button className="px-5 border-2 rounded-l-full bg-gray-200 " ><img className="w-7" src={like}/></button>
            <button className="px-5 rotate-180 border-2 rounded-l-full bg-gray-200"><img className="w-7" src={like}/></button>
        </div>
      </div>
    </div>
  );
}
