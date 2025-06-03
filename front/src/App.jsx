import Home from './views/Home'
import NavBar from './components/Navbar'
import MyAppointments from './views/My Appointments/MyAppointments'
import Contact from './views/Contact/Contact'
import About from "./views/About/About"

function App() {


  return (
    <>
      <NavBar/>
      <Home/>
      <MyAppointments/>
      <Contact/>
      <About/>
      <login/>
      <register/>
    </>
  )
}

export default App
