import styles from "./NavBar.module.css"
import {Link} from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton.jsx";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext.jsx";


const NavBar = () => {
    const { user } = useContext(UserContext); 

    return (
        <header className = {styles.header}>
            <h1>Blackline Sessions</h1>
            <nav className={styles.navLinks}>
                <ul className={styles.navList}>
                    <li><Link to = "/home">Home</Link></li>
                    {user?(
                    <>
                        <li><Link to = "myAppointments">My Appointments</Link></li>
                        <li><Link to = "appointment">Create Appointment</Link></li>
                        <li><Link to = "contact">Contact</Link></li>
                        <li><Link to = "about">About</Link></li>
                        <li className={styles.logout}><LogOutButton/></li>
                    </>
                    ):(
                    <> 
                        <li><Link to = "login">Login</Link></li>
                        <li><Link to = "register">Register</Link></li>
                        <li><Link to = "contact">Contact</Link></li>
                        <li><Link to = "about">About</Link></li>
                    </>
                )}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;