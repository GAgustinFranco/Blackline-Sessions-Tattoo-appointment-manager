import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'
import MyAppointments from './views/My Appointments/MyAppointments'
import Contact from './views/Contact/Contact'
import About from "./views/About/About"
import Login from "./views/Login/Login"
import Register from './views/Register/Register'
import { Routes, Route } from "react-router-dom"
import CreateAppointment from './views/Create Appointment/CreateAppointment'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { fetchUserAppointments } from './helpers/fetchAppointments'


function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user && !user.appointments) {
      fetchUserAppointments(user.id, setUser);
    }
  }, [user]);

  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/myAppointments" element={<MyAppointments/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/appointment" element={<CreateAppointment/>}/>      
      </Routes>
    </>
  )
}

export default App
