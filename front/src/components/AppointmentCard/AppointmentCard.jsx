import styles from "./AppointmentCard.module.css";

const AppointmentCard = ({appointment, onCancel}) => {
    const handleCancel = () => {
        onCancel(appointment.id)
    }

    return (
        <div className={`${styles.appointmentCard} ${appointment.status === "cancelled" ? styles.cancelled : ""}`}>
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
                <button className={styles.cancelAppointmentButton} onClick = {handleCancel}>Cancel appointment</button>
            )}
        </div>
    )
}

export default AppointmentCard;
