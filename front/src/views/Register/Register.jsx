import axios from "axios";
import { useState } from "react";
import {validateRegister} from "../../helpers/validateRegister"

const Register = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        birthdate:"", 
        nDni: "",
        username:"",
        password:""
    })

    const [errors, setErrors] = useState({
        name: "Name is required",
        email: "Email is required",
        birthdate: "Birthdate is required", 
        nDni: "nDni is required",
        username: "Username is required",
        password: "Password is required"
    })

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setForm({
            ...form,
            [name]:value
        })
        
        setErrors(validateRegister(form));
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const formattedForm = {
            ...form,
            birthdate: new Date(form.birthdate).toISOString(),
            nDni: Number(form.nDni)
        };

        try {    
            await axios.post("http://localhost:8080/users/user/register", formattedForm);
            alert("User registered successfully!");
        } catch (error) {
            console.error("Backend error:", error.response.data);
            alert(`Error registering user: ${error.message}`);
        }     
    }

    return (
        <form onSubmit = {handleOnSubmit}>
            <h2>Register</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={form.name} name="name" onChange={handleInputChange}/>
                {errors.name && <p style = {{color: "red"}}>{errors.name}</p>}
            </div>
            
            <div>
                <label>Email:</label>
                <input type="text" value={form.email} name="email" onChange={handleInputChange}/>
                {errors.email && <p style = {{color: "red"}}>{errors.email}</p>}
            </div>

            <div>
                <label>Birthdate:</label>
                <input type="date" value={form.birthdate} name="birthdate" onChange={handleInputChange}/>
                {errors.birthdate && <p style = {{color: "red"}}>{errors.birthdate}</p>}
            </div>

            <div>
                <label>nDni:</label>
                <input type="number" value={form.nDni} name="nDni" onChange={handleInputChange}/>
                {errors.nDni && <p style = {{color: "red"}}>{errors.nDni}</p>}
            </div>

            <div>
                <label>Username:</label>
                <input type="text" value={form.username} name="username" onChange={handleInputChange}/>
                {errors.username && <p style = {{color: "red"}}>{errors.username}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" value={form.password} name="password" onChange={handleInputChange}/>
                {errors.password && <p style = {{color: "red"}}>{errors.password}</p>}
            </div>

            <button>Register</button>
        </form>
    )
    
}

export default Register;