import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});
export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
