import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import Story from './components/Story'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Story />
      <Post />
      <Footer />
    </>
  )
}

export default App
