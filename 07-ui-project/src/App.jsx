import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section1/Section2/Section2'

const App = () => {
  const user = [
    {
      img:'https://images.unsplash.com/photo-1683534239440-3b741f48a7ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmtpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'underserve'
    },
      
    {
      img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Satiseied'
    },

    {
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'underBanked'
    }
  ]
  return (
    <div>
      <Section1 />
      <Section2/>
    </div>
  )
}


export default App
