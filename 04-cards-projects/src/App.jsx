import{Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div>
      <div className='parent'>
        <div className='card'>
          <div className="top">
            <img src='https://imgs.search.brave.com/0Ec6FtBVVNRzoek1eZO-7oR3jIQoxSKYI6rHO5shr5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn' />
            <button>Save <Bookmark /></button>
          </div>
          <div className="center">
            <h3>Amazon <spam>5 days ago</spam></h3>
            <h2>Senior UI/UX Designer</h2>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>

          </div>
          <div className="bottom">
            <div>
            </div>
              <h3>$120/hr</h3>
              <p>Mumbai,Indi</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
