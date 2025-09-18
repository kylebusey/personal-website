import { useState } from 'react'
import pinkRose from './assets/pink-rose.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={pinkRose} className="pink-rose" alt="First rose" />
          <h1>Coming Soon</h1>
          <img src={pinkRose} className="pink-rose" alt="Second rose" />
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
