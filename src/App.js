import logo from './assets/img/logo.png'

export default function App() {
  return (
    <div className="container">
      <Header />
      <ul>
        <CoreConcepts title="Learning React" hours={72.5} />
        <CoreConcepts title="PHP/Laravel" hours={55.5} />
      </ul>
    </div>
  )
}

function Header() {

  return (
    <header>
      <img src={logo} alt='logo' height={80} />
    </header>)
}

function CoreConcepts({ title, hours }) {
  return (
    <li>
      <p>{title}</p>
      <p>time: {hours} h</p>
    </li>
  )
}


