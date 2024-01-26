import React from 'react'

export default function Button() {
    const list = ["All", "Cricket", "Live", "Gaming", "News", "Songs", "Editing", "Comedy", "Vlogs", "Podcost","Gym", "Movie","Trailer", "Review", "Gadget","Computer","Software", "Cars", "Unboxing", "Hockey","Stream","Football","Travel"]
  return (
    <>
        {list.map((l)=> {
            return <button className='py-2 text-xs font-bold text-gray-700 px-3 rounded-lg bg-gray-100 mr-3'>{l}</button>
        })}
    </>
    
  )
}
