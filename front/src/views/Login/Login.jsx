import axios from "axios";
import {validateLogin} from "../../helpers/validateLogin";
import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext.jsx";
import styles from "./Login.module.css";

const Login = () => {
    const [form, setForm] = useState({
        username:"",
        password:""
    })

    const [errors, setErrors] = useState({
        username: "Username is required",
        password: "Password is required"
    })
    
    const {setUser} = useContext(UserContext);

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        const updateForm = {
            ...form,
            [name]:value
        }
        
        setForm(updateForm);

        setErrors(validateLogin(updateForm));
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateLogin(form);
                setErrors(validationErrors);
                if (Object.keys(validationErrors).length > 0) {
                    alert("Please fix the errors before submitting.");
                    return;
                } 
        try {    
            const response = await axios.post("http://localhost:8080/users/user/login", form);

            if (response.data && response.data.user) {
                const user = response.data.user;

                const appointmentsRes = await axios.get(`http://localhost:8080/appointments/appointment/user/${user.id}`);
    
                const fullUserData = {
                    ...user,
                    appointments: appointmentsRes.data
                };
    
                localStorage.setItem("user", JSON.stringify(fullUserData));
                setUser(fullUserData);
                
            alert("User logged in successfully!");
        }} catch (error) {
            alert(`Error logging in to user: ${error.message}`)
        }
        
    }

    return (
        <div>
            <form onSubmit = {handleOnSubmit} className={styles.container}>
                <h2>Login</h2>
                <div className={styles.inputStyle}>
                    <label>Username:</label>
                    <input type="text" value={form.username} name="username" onChange={handleInputChange}/>
                </div>
                    {errors.username && <p className={styles.errors}>{errors.username}</p>}

                <div className={styles.inputStyle}>
                    <label>Password:</label>
                    <input type="password" value={form.password} name="password" onChange={handleInputChange}/>
                </div>
                    {errors.password && <p className={styles.errors}>{errors.password}</p>}

                <button className={styles.buttonLogin} disabled={Object.keys(errors).length > 0}>Login</button>
            </form>

            <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/videos/4126114-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5
            </video>
        </div>
    )
}

export default Login;