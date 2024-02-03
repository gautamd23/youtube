import React, { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

export default function VideoContainer() {
  const videos = useSelector((store) => store.video?.videos);
  const dispatch = useDispatch();
  useEffect(function () {
    !videos && getVideos();
  }, []);

  async function getVideos() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    dispatch(addVideos(json?.items));
  }
  return (
    <div className="flex flex-wrap ">
      {videos?.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
}
