export const validateLogin = (input) => {
    const errors = {};

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

    return errors;
}