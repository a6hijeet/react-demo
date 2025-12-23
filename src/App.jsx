import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import Story from './components/Story'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Color from './components/Color'


function Home() {
  return(
    <>
     <Story />
      <Post />
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home </Link></li>
          <li> <Link to="/posts">Posts </Link></li>
          <li> <Link to="/stories">Stories </Link></li>
          <li><Link to="/color">Color </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Post />}/>
        <Route path="/stories" element={<Story />}/>
        <Route path="/color" element={<Color />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
