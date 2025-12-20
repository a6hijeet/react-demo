import reactLogo from '../assets/react.svg'
import Button from './Button/Button'
import ButtonIn from './ButtonIn'
import viteLogo from '/vite.svg'

function Header() {
 return (
  <header>
    <div className="logo">
      <img src={viteLogo}></img>
    </div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <Button />
        <ButtonIn />
      </ul>
    </nav>
  </header>
 )
}

export default Header