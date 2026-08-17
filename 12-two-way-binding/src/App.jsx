import React from 'react'
import { useState } from 'react'


// form handling code

// const App = () => {

//   const [title, setTitle] =  useState('')

//   const submitHandler = (e) =>{
//     e.preventDefault()  // main concept
//     console.log("form Summit");
//   }


//   return (
//     <div>
//       <form onSubmit={(e) =>{
//         submitHandler(e)
//       }}>
//         <input type="text" 
//         placeholder='Enter your name '
//         onChange={() =>{
//           console.log("writting")
//         }}
//         />
//         <button>Summit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// -----------------------------------------------------------------

// const App = () => {

//   const [title, setTitle] =  useState('')

//   const submitHandler = (e) =>{
//     e.preventDefault()  // main concept
//     console.log("form Summit");
//   }


//   return (
//     <div>
//       <form onSubmit={(e) =>{
//         submitHandler(e)
//       }}>
//         <input type="text" 
//         placeholder='Enter your name '
//         onChange={(e) =>{
//           console.log(e.target.value)
//         }}
//         />
//         <button>Summit</button>
//       </form>
//     </div>
//   )
// }

// export default App


// ------------------------------------------------------------------------


//  ---- Two-way-binding

const App = () => {

  const [title, setTitle] =  useState('')

  const submitHandler = (e) =>{
    e.preventDefault()  // main concept
    console.log('form summbited by',{title})

    setTitle('')  // two way binding 
    console.log("form Summit");
  }


  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter your name '
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        />
        <button>Summit</button>
      </form>
    </div>
  )
}

export default App





