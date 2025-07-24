import React from 'react'

const App = () => {
  return (
    <div className='flex mx-10 mt-10 p-20'>
      <div className='w-1/2 flex flex-col gap-5 border border-blue-900 p-10 rounded-xl shadow-2xl justify-center'>
        <p className='text-4xl text-blue-800'>Add a Task</p>
        <input type="text" placeholder='Title' className='w-96 p-2 border-2 rounded-xl text-blue-800 border-blue-900'/>
        <textarea type="text" placeholder='Description' className='w-96 h-40 p-2 border-2 rounded-xl text-blue-800 border-blue-900'/>
        <div className='flex justify-end'>
          <button className='px-4 py-3 border-2 w-20 bg-blue-900 text-white rounded-xl hover:bg-blue-700'>Add</button>
        </div>
      </div>
      <hr className='mx-20 border-2 h-150 text-blue-900'/>
      <div className='w-full'>
        <div className='flex justify-between bg-blue-200 p-5 rounded-xl text-blue-900 space-x-5'>
          <div className='flex flex-col gap-5'>
            <p className='text-xl font-semibold'>Buy Books</p>
            <p className=''>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className='flex flex-col justify-between text-white'>
            <button className='w-20 bg-blue-900  rounded  py-1 hover:bg-blue-700'>Done</button>
            <button className='w-20 bg-red-700 rounded py-1 hover:bg-red-600'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App