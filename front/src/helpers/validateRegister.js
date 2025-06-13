export const validateRegister = (input) => {
    const errors = {};

    if (!input.name.trim()) {
        errors.name = "Name is required";
    }

    if (!input.email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Email is invalid";
    }

    if (!input.birthdate) {
        errors.birthdate = "Birthdate is required";
    } else {
        const birthdate = new Date(input.birthdate);
        const age = new Date().getFullYear() - birthdate.getFullYear();
        if (age < 18) {
            errors.birthdate = "You must be at least 18 years old to register";
        }
    }

    if (!input.nDni.trim()) {
        errors.nDni = "DNI is required";
    } else if (!/^\d{7,8}$/.test(input.nDni)) {
        errors.nDni = "DNI must be 7 or 8 digits";
    }

    if (!input.username.trim()) {
        errors.username = "Username is required";
    } else if (!/[0-9]/.test(input.username)) {
        errors.username = "Username must contain at least one number";
    } else if (input.username.length < 6) {
        errors.username = "Username must be at least 6 characters";
    } else if (input.username.length > 20) {
        errors.username = "Username must be less than 20 characters"
    }
    
    if (!input.password.trim()) {
        errors.password = "Password is required";
    } else if (input.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    } else if (input.password.length > 20) {
        errors.password = "Password must be less than 20 characters"
    } else if (!/[a-z]/.test(input.password)) {
        errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(input.password)) {
        errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(input.password)) {
        errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.password)) {
        errors.password = "Password must contain at least one special character";
    }

    if (input.password !== input.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}