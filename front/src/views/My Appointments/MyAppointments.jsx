import { useEffect, useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import axios from "axios"

const MyAppointments = () => {

    const [myAppointments, setMyAppointments] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/appointments/appointment")
        .then((res) => setMyAppointments(res.data.data))
    }, [])
        return (
            <>                
                <h2>Mis turnos</h2>
                <div>
                    {myAppointments.map((a) =>(
                    <AppointmentCard key = {a.id} appointment = {a} />
                    ))}
                </div>
            </>
        )
}

export default MyAppointments;