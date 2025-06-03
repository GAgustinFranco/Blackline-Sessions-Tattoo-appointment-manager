import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'
import MyAppointments from './views/My Appointments/MyAppointments'
import Contact from './views/Contact/Contact'
import About from "./views/About/About"
import Login from "./views/Login/Login"
import Register from './views/Register/Register'

function App() {


  return (
    <>
      <NavBar/>
      <Home/>
      <MyAppointments/>
      <Contact/>
      <About/>
      <Login/>
      <Register/>
    </>
  )
}

export default App
