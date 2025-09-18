import pinkRose from './assets/pink-rose.svg'
 import './fonts/Borel-Regular.ttf';
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <div className='title-section'>
          <img src={pinkRose} className="pink-rose" alt="First rose" />
          <h1>Coming Soon</h1>
          <img src={pinkRose} className="pink-rose" alt="Second rose" />
          </div>
          <h3>12.1.2025</h3>
          
      <div className="countdown">

      </div>
      <h3 className="read-the-docs">
        for the girl i love most
      </h3>
      </div>
    </>
    
  )
}

export default App
