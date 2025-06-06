import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
