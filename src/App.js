import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development"

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exect element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:id/:name" element={<Service />} />
          <Route path="/dashboard" isLoggedIn={false}
            element={<Dashboard />} />
          <Route path="/Login" element={<Login onLogin={() => console.log("CLICK LOCIN")} isLoggedIn={false} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service/?id=12">Service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


const Home = () => {
  return <h1>Home</h1>
}

const About = () => {
  return <h1>About</h1>
}

const Service = () => {
  const param = useParams();
  console.log(param)

  return <h1>Service</h1>
}


const Login = ({ isLoggedIn, onLogin }) => {
  return (
    <>
      <p>Login to see secret page</p>
      <button className="btn btn-outline-warning" onClick={onLogin}>Login</button>
    </>
  )
}

const Dashboard = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Dashboard</h1>
  }
  return <h1>Access Denied!</h1>
}



