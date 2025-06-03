import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <header className = {styles.header}>
            <h1>Blackline Sessions</h1>
            <nav className={styles.navLinks}>
                <ul>
                    <li>Home</li>
                    <li>My Appointments</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;