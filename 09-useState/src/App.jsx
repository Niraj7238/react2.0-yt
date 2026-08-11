// import React from 'react'
import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)
//   const [username, setUsername] = useState("Niraj")

//   function changeNum(){
//     setNum(500)
//     setUsername("Akash")
//   }

//   return (
//     <div>
//       <h1>Value of a is {num} <br/> <br/> value of user is {username} </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App











// ------------------------------------------------------------------------------------------------------------------
// import React from 'react'

// const App = () => {
//   const [num, setNum] = useState(2)

//   function increaseNum(){
//     console.log("increasing");
//   }
//   function decreaseNum(){
//     console.log("decreasing");

//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//     </div>
//   )
// }

// export default App


// -------------------------------------------------------------------------------------


// import React from 'react'

// const App = () => {
//   const [num, setNum] = useState(2)

//   function increaseNum(){
//     setNum(num+1)
//   }
//   function decreaseNum(){
//     setNum(num-1)

//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//     </div>
//   )
// }

// export default App



// ----------------------------------------------------------------------------------------------------


import React from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)

  }

  function jump5Num(){
    setNum(num + 5)
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </div>
  )
}

export default App
