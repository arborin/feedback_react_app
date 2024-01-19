import { useState } from "react"
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { redirect, useNavigate, useParams } from "react-router-dom/dist/umd/react-router-dom.development"

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const onLogin = () => {
    setIsLoggedIn(true)
  }
  const onLogOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exect element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:id/:name" element={<Service />} />
          <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
          <Route path="/Login" element={<Login onLogin={onLogin} isLoggedIn={isLoggedIn} onLogOut={onLogOut} />} />
          <Route path="*" element={<Error />} />
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


const Login = ({ isLoggedIn, onLogin, onLogOut }) => {
  return (
    <>
      <p>Login to see secret page</p>
      <button className="btn btn-outline-warning" onClick={onLogin}>Login</button>
      <button className="btn btn-outline-danger" onClick={onLogOut}>Log Out</button>
    </>
  )
}

const Dashboard = ({ isLoggedIn }) => {
  console.log(isLoggedIn)
  if (isLoggedIn) {
    return <h1>Dashboard</h1>
  }
  return <h1>Access Denied!</h1>
}

const Error = () => {
  let navigate = useNavigate();

  const goHome = () => {
    return navigate("/");
  }

  return (
    <>
      <h1>Page not found!</h1>
      <button className="btn btn-success" onClick={goHome}>Home</button>
    </>
  )
}



