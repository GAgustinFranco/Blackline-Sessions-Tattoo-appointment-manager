import styles from "./AppointmentCard.module.css";

const AppointmentCard = ({appointment, onCancel}) => {
    const handleCancel = () => {
        onCancel(appointment.id)
    }

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

            {appointment.status === "active" && (
                <button onClick = {handleCancel}>Cancel appointment</button>
            )}
        </div>
    )
}

export default AppointmentCard;
