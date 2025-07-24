import React from 'react'

const Task = ({tasks, onDone, onDelete}) => {
  return (
    tasks.map(t=>(
    <div className='w-full'>
        <div key={t.id} className='flex justify-between bg-blue-200 p-5 rounded-xl text-blue-900 space-x-5'>
          <div className='flex flex-col gap-5'>
            <p className='text-xl font-semibold'>{t.title}</p>
            <p className=''>{t.description}</p>
          </div>
          <div className='flex flex-col justify-between text-white'>
            <button onClick={()=>onDone(t.id)} className='w-20 bg-blue-900  rounded  py-1 hover:bg-blue-700'>Done</button>
            <button onClick={()=>onDelete(t.id)} className='w-20 bg-red-700 rounded py-1 hover:bg-red-600'>Delete</button>
          </div>
        </div>
    </div>
    ))
    
  )
}

export default Task