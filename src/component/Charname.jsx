import React from 'react'
import data from './Charname.json'

function Charname() {
  return (
    <>
    
    <div className='bg-pink-300 w-full h-screen grid grid-cols-3 gap-10 pr-60 pl-60  justify-items-center content-center'>
    {data.map(d => (
      <div key={d.id} className='flex flex-col items-center pb-10 w-full max-w-xs h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <img src={d.img} className='w-24 h-24 mb-3 mt-5 rounded-full shadow-xl '/>
        <h5 className='mb-1 text-xl font-medium text-pink-600 '>{d.name}</h5>
        <button className='mt-4 px-4 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg shadow-lg'>sound</button>
      </div>
       ))}
    </div>
   
    </>
  )
}

export default Charname