import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'


const Slidecard = () => {
  const [val, setVal] = useState(false)

  const handleSlideToggle = (val, setVal) => {
    setVal(!val)
  }
  

  return (
    <div className='flex items-center justify-center gap-10 h-screen w-full'>
      <div className='h-64 flex overflow-hidden object-cover rounded-lg w-96 bg-slate-50 relative'>
        <img
          className={`h-full ${val === false ? 'translate-x-[0%]' : '-translate-x-[100%]'} transition-transform z-10 duration-300 ease-in-out object-cover w-full`}
          src="https://images.unsplash.com/photo-1728356165696-17ed53e24dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`h-full ${val === false ? 'translate-x-[0%]' : '-translate-x-[100%]'} transition-transform z-10 duration-300 ease-in-out object-cover w-full`}
          src="https://images.unsplash.com/photo-1727873817701-8cd132afbb01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => handleSlideToggle(val, setVal)}
          className='absolute z-50 top-1/2 p-4 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'
        >
          <IoIosArrowDroprightCircle color='black' size={"1.7em"} />
        </span>
      </div>
    </div>
  )
}

export default Slidecard
