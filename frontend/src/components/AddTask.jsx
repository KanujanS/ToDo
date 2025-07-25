import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description: desc });
    setTitle('');
    setDesc('');
    console.log('Submitting:', { title, description: desc });
  };

  return (
    <form
      onSubmit={submit}
      className='w-full max-w-md mx-auto flex flex-col gap-5 border border-blue-900 p-6 rounded-xl shadow-2xl justify-center bg-white'
    >
      <p className='text-2xl md:text-3xl text-blue-800 font-bold'>Add a Task</p>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='Title'
        className='w-full p-2 border-2 rounded-xl text-blue-800 border-blue-900'
      />

      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder='Description'
        className='w-full h-32 p-2 border-2 rounded-xl text-blue-800 border-blue-900'
      />

      <div className='flex justify-end'>
        <button
          type='submit'
          className='px-6 py-2 border-2 bg-blue-900 text-white rounded-xl hover:bg-blue-700'
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;