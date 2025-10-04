import axios from "axios";
import { useState, useContext } from "react";
import {validateAppointment} from "../../helpers/validateAppointment.js";
import { UserContext } from "../../../context/UserContext.jsx";
import styles from "./CreateAppointment.module.css";

const CreateAppointment = () => {
    const [form, setForm] = useState({
        date:"",
        time:"",
        status:"active"
    })

    const [errors, setErrors] = useState({
        date: "Date is required",
        time: "Time is required",
    })
    
    const { user, setUser } = useContext(UserContext);

    const handleInputChange = (event) => {
        const { name, value} = event.target;

        const updateForm = {
            ...form,
            [name]:value
        }
        
        setForm(updateForm);

        setErrors(validateAppointment(updateForm));
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateAppointment(form);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            alert("Please fix the errors before submitting.");
            return;
        }

        const selectDateTime = new Date (`${form.date}T${form.time}`);
        const day = selectDateTime.getDay();
        const hour = selectDateTime.getHours();

        const isValidDay = [4, 5, 6].includes(day);
        const isValidHour = hour >= 19 || hour === 23;

        if (!isValidDay || !isValidHour) {
            alert("Appointments can only be scheduled on Thursday, Friday, or Saturday between 19:00 and 23:00.");
            return;
    }


        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            alert("User not logged in");
            return;
        }
        const user = JSON.parse(storedUser);
    
        const body = {
            ...form,
            userId: user.id,  
            date: form.date
        };

        try {
            const response = await axios.post('http://localhost:8080/appointments/appointment/schedule', body);
            
            const newAppointment = response.data.data || response.data;
            
            const currentAppointments = Array.isArray(user.appointments)
                ? user.appointments
                : user.appointments?.data || [];
            const updatedAppointments = [...currentAppointments, newAppointment];
            const updatedUser = { ...user, appointments: updatedAppointments };
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setUser(updatedUser);

            alert('Appointment created successfully!');
            setForm({ date: '', time: '', status: 'active' }); 
        } catch (error) {
            console.error('Error creating appointment:', error);
            alert(`Failed to create appointment: ${error.response?.data?.message || error.message}`);
            }
        };

    return (
        <div>
            <form onSubmit = {handleOnSubmit} className={styles.container}>
                <h2>Create Appointment</h2>
                <div className={styles.inputStyle}>
                    <label>Date:</label>
                    <input type="date" value={form.date} name="date" onChange={handleInputChange}/>
                    {errors.date && <p style = {{color: "red"}}>{errors.date}</p>}
                </div>

                <div className={styles.inputStyle}>
                    <label>Time:</label>
                    <input type="time" value={form.time} name="time" onChange={handleInputChange}/>
                    {errors.time && <p style = {{color: "red"}}>{errors.time}</p>}
                </div>

                <button className={styles.buttonCreateAppointment}disabled={Object.keys(errors).length > 0}>Create Appointment</button>
            </form>
            <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/videos/1086524-hd_1280_720_25fps.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5
            </video>
        </div>
    )
}

export default CreateAppointment;


