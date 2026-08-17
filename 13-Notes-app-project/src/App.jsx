import React from 'react'

const App = () => {






  
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start flex-col gap-4 p-10 '>
        <input
          type="text" 
          placeholder='Enter Notes Heading' 
          className=' px-5 w-1/2 h-20 font-medium p-5 border-2 outline-none rounded'
        />
        <textarea 
          type="text" 
          className='px-5 w-1/2 h-32 p-5 font-medium border-2 outline-none rounded'
          placeholder='write details'
          />
          <button className='bg-white text-black font-medium outline-none w-1/2 px-5 py-2 rounded'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
