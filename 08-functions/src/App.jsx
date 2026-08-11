import React from 'react'

const App = () => {
  function input(){
    console.log("hello")
  }
  return (
    <div>
      <div onClick={input}>Clickm..me</div>
    </div>
  )
}

export default App
