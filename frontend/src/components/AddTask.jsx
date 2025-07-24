import React, { useRef, useState } from 'react'

const AddTask = (onAdd) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const submit = e =>{
        e.preventDefault();
        onAdd({title, description: desc});
        setTitle('');
        setDesc('');
    }
  return (
    <div className='w-1/2 flex flex-col gap-5 border border-blue-900 p-10 rounded-xl shadow-2xl justify-center'>
        <p className='text-4xl text-blue-800'>Add a Task</p>
        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder='Title' className='w-96 p-2 border-2 rounded-xl text-blue-800 border-blue-900'/>
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} type="text" placeholder='Description' className='w-96 h-40 p-2 border-2 rounded-xl text-blue-800 border-blue-900'/>
        <div className='flex justify-end'>
          <button type='submit' className='px-4 py-3 border-2 w-20 bg-blue-900 text-white rounded-xl hover:bg-blue-700'>Add</button>
        </div>
    </div>
  )
}

export default AddTask