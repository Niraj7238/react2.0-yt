import React from 'react'
import { useEffect } from 'react'

const App = () => {

  useEffect(function(){
    console.log('user running....');
  })



  return (
    <div>
      <button >click</button>
    </div>
  )
}

export default App
