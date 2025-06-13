import axios from "axios";

export const fetchUserAppointments = async (userId, setUser) => {
    try {
        const response = await axios.get(`http://localhost:8080/appointments/appointment/user/${userId}`);
        const appointments = response.data;

        setUser(prevUser => {
            const updatedUser = { ...prevUser, appointments };
            localStorage.setItem("user", JSON.stringify(updatedUser));
            return updatedUser;
        });

    } catch (error) {
        console.error("Error fetching user appointments:", error.message);
    }
};