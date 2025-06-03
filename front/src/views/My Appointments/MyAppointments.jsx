import appointments from "../../helpers/myAppointments";
import { useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";

const MyAppointments = () => {

    const [myAppointments, setMyAppointments] = useState(appointments)
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