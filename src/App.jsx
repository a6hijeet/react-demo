import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Post />
      <Footer />
    </>
  )
}

export default App
