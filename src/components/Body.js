import React from 'react'
import SideBar from './SideBar'
import VideoContainerBody from './VideoContainerBody'
import { Outlet } from 'react-router-dom'


export default function Body() {
  return (
    <div className='flex justify-normal w-screen mt-1'>
    
        <SideBar/>
        {/* <VideoContainerBody/> */}
        <Outlet/>
    </div>
  )
}
