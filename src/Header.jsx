import logo from "./assets/img/logo.png"

function Header() {
  return (
    <header className='header'>
        <img src={logo} className='header-img' alt="React logo" />
        <span>Learnig React</span>
    </header>
  )
}


export default Header;