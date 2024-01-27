import React from 'react'
import SideBar from './SideBar'
import VideoContainerBody from './VideoContainerBody'


export default function Body() {
  return (
    <div className='flex justify-normal w-screen mt-1'>
    
        <SideBar/>
        <VideoContainerBody/>
    </div>
  )
}
