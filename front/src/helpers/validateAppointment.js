export const validateAppointment = (input) => {
    const errors = {};

    if (!input.date) {
        errors.date = "Date is required";
    } 

    if (!input.time.trim()) {
        errors.time = "Time is required";
    }


    return errors;
}