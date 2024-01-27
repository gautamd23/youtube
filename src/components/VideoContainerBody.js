import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

export default function VideoContainerBody() {
  return (
    <div className='flex flex-col w-full px-6'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}
