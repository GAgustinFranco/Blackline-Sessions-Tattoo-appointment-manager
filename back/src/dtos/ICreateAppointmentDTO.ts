interface ICreateAppointmentDTO{
    date:Date,
    time:string,
    userId:number,
    status: "active" | "cancelled";
}

export default ICreateAppointmentDTO;