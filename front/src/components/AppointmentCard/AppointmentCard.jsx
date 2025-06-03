import styles from "./AppointmentCard.module.css";

const AppointmentCard = ({appointment}) => {
    
    return (
        <div>
            <p>
                <strong>Date:</strong> {appointment.date}
            </p>
            <p>
                <strong>Time:</strong> {appointment.time}
            </p>
            <p>
                <strong>Status:</strong> {appointment.status}
            </p>
        </div>
    )
}

export default AppointmentCard;