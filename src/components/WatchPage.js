import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  GET_YOUTUBE_VIDEO,
  YOUTUBE_API,
  YOUTUBE_KEY,
} from "../utils/constants";
import { getID, watchVideo } from "../utils/videoSlice";
import WatchCard from "./WatchCard";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const id = useSelector((store) => store.video.id);
  dispatch(getID(searchParams.get("v")));
  console.log(id);

  useEffect(function () {
    dispatch(closeMenu());

    getVideo();
  }, []);

  async function getVideo() {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUTUBE_KEY}`
    );
    const json = await data.json();
    console.log(json.items);
    dispatch(watchVideo(json?.items[0]));
  }

  return (
    <div className="px-24 py-6 flex gap-6 ">
      <WatchCard searchParams={searchParams}  />
      <div>recomended</div>
    </div>
  );
}
