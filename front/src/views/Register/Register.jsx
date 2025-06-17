import axios from "axios";
import { useState } from "react";
import {validateRegister} from "../../helpers/validateRegister"
import styles from "./Register.module.css";

const Register = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        birthdate:"", 
        nDni: "",
        username:"",
        password:"",
        confirmPassword:""
    })

    const [errors, setErrors] = useState({
        name: "Name is required",
        email: "Email is required",
        birthdate: "Birthdate is required", 
        nDni: "nDni is required",
        username: "Username is required",
        password: "Password is required",
        confirmPassword: "Confirm Password is required"
    })

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        const updateForm = {
            ...form,
            [name]:value
        }
        
        setForm(updateForm);
        setErrors(validateRegister(updateForm));
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const formattedForm = {
            ...form,
            birthdate: new Date(form.birthdate).toISOString(),
            nDni: Number(form.nDni)
        };

        const validationErrors = validateRegister(form);
                setErrors(validationErrors);
                if (Object.keys(validationErrors).length > 0) {
                    alert("Please fix the errors before submitting.");
                    return;
                }
        
        try {    
            await axios.post("http://localhost:8080/users/user/register", formattedForm);
            alert("User registered successfully!");
        } catch (error) {
            console.error("Backend error:", error.response.data);
            alert(`Error registering user: ${error.message}`);
        }     
    }

    return (
        <div>
            <form onSubmit = {handleOnSubmit} className={styles.container}>
                <h2>Register</h2>
                <div className={styles.inputContainer}>
                    <div className={styles.inputStyle}>
                        <label>Name:</label>
                        <input type="text" value={form.name} name="name" onChange={handleInputChange}/>
                        {errors.name && <p className={styles.errors}>{errors.name}</p>}
                    </div>
                    
                    <div className={styles.inputStyle}>
                        <label>Email:</label>
                        <input type="text" value={form.email} name="email" onChange={handleInputChange}/>
                        {errors.email && <p className={styles.errors}>{errors.email}</p>}
                    </div>

                    <div className={styles.inputStyle}>
                        <label>Birthdate:</label>
                        <input type="date" value={form.birthdate} name="birthdate" onChange={handleInputChange}/>
                        {errors.birthdate && <p className={styles.errors}>{errors.birthdate}</p>}
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.inputStyle}>
                        <label>nDni:</label>
                        <input type="number" value={form.nDni} name="nDni" onChange={handleInputChange}/>
                        {errors.nDni && <p className={styles.errors}>{errors.nDni}</p>}
                    </div>

                    <div className={styles.inputStyle}>
                        <label>Username:</label>
                        <input type="text" value={form.username} name="username" onChange={handleInputChange}/>
                        {errors.username && <p className={styles.errors}>{errors.username}</p>}
                    </div>

                    <div className={styles.inputStyle}>
                        <label>Password:</label>
                        <input type="password" value={form.password} name="password" onChange={handleInputChange}/>
                        {errors.password && <p className={styles.errors}>{errors.password}</p>}
                    </div>

                    <div className={styles.inputStyle}>
                        <label>Confirm Password</label>
                        <input type="password" value={form.confirmPassword} name="confirmPassword" onChange={handleInputChange}/>
                        {errors.confirmPassword && <p className={styles.errors}>{errors.confirmPassword}</p>}
                    </div>
                </div>

                <button className={styles.buttonRegister} disabled={Object.keys(errors).length > 0}>Register</button>
            </form>

            <video autoPlay muted loop className={styles.videoBackground}>
                <source src="videos/3345545-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5
            </video>
        </div>
    )
    
}

export default Register;