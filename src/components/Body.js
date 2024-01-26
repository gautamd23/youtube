import React from 'react'
import SideBar from './SideBar'
import VideoContainerBody from './VideoContainerBody'


export default function Body() {
  return (
    <div className='flex w-full justify-between'>
    
        <SideBar/>
        <VideoContainerBody/>
    </div>
  )
}
