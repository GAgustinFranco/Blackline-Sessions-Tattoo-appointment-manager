import axios from "axios";
import {validateLogin} from "../../helpers/validateLogin";
import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext.jsx";

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

            <button disabled={Object.keys(errors).length > 0}>Login</button>
        </form>
    )
}

export default Login;