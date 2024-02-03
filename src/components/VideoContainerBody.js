import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function VideoContainerBody() {
  const id = useSelector((store)=>store?.video.videos)
  return (
    <div className="flex flex-col w-full px-6">
      <ButtonList />
  
        <VideoContainer />
      
    </div>
  );
}
