import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <div className='App'>
        <Header/>
        <Home/>
      </div>
    </>
  )
}

export default App
