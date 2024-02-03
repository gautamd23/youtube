import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: null,
    id: null,
    watch: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    getID: (state, action) => {
      state.id = action.payload;
    },
    watchVideo: (state, action) => {
      state.watch = action.payload;
    },
  },
});
export const { addVideos, getID, watchVideo } = videoSlice.actions;
export default videoSlice.reducer;
