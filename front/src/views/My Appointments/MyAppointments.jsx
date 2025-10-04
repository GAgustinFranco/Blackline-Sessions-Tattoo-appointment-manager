import { useEffect, useState } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import axios from "axios";
import styles from "./MyAppointments.module.css";

const MyAppointments = () => {
  const [myAppointments, setMyAppointments] = useState(null); 

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        const user = JSON.parse(userString);
        const appointments = user.appointments || [];
        setMyAppointments(appointments);
      } catch (error) {
        setMyAppointments([]);
      }
    } else {
      setMyAppointments([]);
    }
  }, []);

  const cancelAppointment = async (appointmentId) => {
    try {
      await axios.put(`http://localhost:8080/appointments/appointment/cancel/${appointmentId}`)

      const updateAppointments = myAppointments.map((a) => 
        a.id === appointmentId ? { ...a, status: "cancelled"} : a
      )
      setMyAppointments(updateAppointments);

      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        const updatedUser = { ...user, appointments: updateAppointments };
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
      alert("Appoitment cancelled successfully");
    } catch (error) {
      alert("Error cancelling appointment, please try again later.");
    }
  }

  if (myAppointments === null) return <p>Cargando turnos...</p>;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Mis turnos</h2>
        <div className={styles.appointmentsContainer}>
          {myAppointments.length > 0 ? (
            myAppointments.map((a) => (
              <AppointmentCard key={a.id} appointment={a} onCancel={cancelAppointment} />
            ))
          ) : (
            <p>No tenés turnos agendados todavía.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;