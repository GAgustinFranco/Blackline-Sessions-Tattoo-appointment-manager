import axios from "axios";
import { useState } from "react";
import {validateLogin} from "../../helpers/validateLogin";

const Login = () => {
    const [form, setForm] = useState({
        username:"",
        password:""
    })

    const [errors, setErrors] = useState({
        username: "Username is required",
        password: "Password is required"
    })
    
    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setForm({
            ...form,
            [name]:value
        })

        setErrors(validateLogin(form));
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {    
            await axios.post("http://localhost:8080/users/user/login", form);
            alert("User logged in successfully!");
        } catch (error) {
            alert(`Error logging in to user: ${error.message}`)
        }
        
    }

    return (
        <form onSubmit = {handleOnSubmit}>
            <h2>Login</h2>
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

            <button>Login</button>
        </form>
    )
}

export default Login;