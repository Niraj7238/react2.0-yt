// import React from 'react'

// const App = () => {

//   const submitHandler = () =>{
//     console.log("form Summit");
//   }
//   return (
//     <div>
//       <form onSubmit={() =>{
//         submitHandler()
//       }}>
//         <input type="text" placeholder='Enter your name ' />
//         <button>Summit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// ---------------------------------------------------------===========


import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()  // main concept
    console.log("form Summit");
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name ' />
        <button>Summit</button>
      </form>
    </div>
  )
}

export default App




