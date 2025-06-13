import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const LogOutButton = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("user");    
    setUser(null);                      
    navigate("/home");                  
    };

    return (
    <button onClick={handleLogout}>
        Logout
    </button>
    );
};

export default LogOutButton;