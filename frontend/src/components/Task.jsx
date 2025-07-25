import React from 'react';

const Task = ({ tasks, onDone, onDelete }) => {
  return (
    <div className='w-full max-w-2xl mx-auto flex flex-col gap-5'>
      {tasks.map((t) => (
        <div key={t.id} className='flex flex-col sm:flex-row justify-between gap-4 bg-blue-100 p-4 rounded-xl shadow-md text-blue-900'>
          <div>
            <p className='text-xl font-semibold'>{t.title}</p>
            <p className='text-sm text-gray-700'>{t.description}</p>
          </div>
          <div className='flex gap-2 self-end sm:self-center'>
            <button
              onClick={() => onDone(t.id)}
              className='px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-700'
            >
              Done
            </button>
            <button
              onClick={() => onDelete(t.id)}
              className='px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;