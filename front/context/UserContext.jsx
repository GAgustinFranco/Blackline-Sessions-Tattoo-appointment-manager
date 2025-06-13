import {createContext, useState, useEffect} from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        try {
        return storedUser ? JSON.parse(storedUser) : null;
        } catch {
        console.error('Error parsing stored user');
        return null;
        }
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
          localStorage.removeItem('user'); // Soporte para cierre de sesión
        }
        }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};