"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentsService = exports.createAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const usersService_1 = require("./usersService");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield data_source_1.appointmentRepository.find();
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🔎 Buscando appointment en base de datos con ID:", id);
    const foundAppointment = yield data_source_1.appointmentRepository.findOne({
        where: { id }
    });
    if (!foundAppointment)
        throw new Error("Appointment not found");
    return foundAppointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const createAppointmentService = (createAppointmentDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, usersService_1.getUserByIdService)(createAppointmentDTO.userId);
    const appointmentDateTime = new Date(`${createAppointmentDTO.date}T${createAppointmentDTO.time}`);
    const day = appointmentDateTime.getDay();
    const hour = appointmentDateTime.getHours();
    const validDays = [4, 5, 6];
    const isValidDay = validDays.includes(day);
    const isValidHour = hour >= 19 || hour === 23;
    if (!isValidDay || !isValidHour) {
        throw new Error("Appointments can only be scheduled on Thursday, Friday, or Saturday between 19:00 and 23:00.");
    }
    const newAppointment = yield data_source_1.appointmentRepository.create({
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        user: user,
        status: createAppointmentDTO.status
    });
    const results = yield data_source_1.appointmentRepository.save(newAppointment);
    return results;
});
exports.createAppointmentService = createAppointmentService;
const cancelAppointmentsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🔍 Buscando turno con ID:", id);
    const foundAppointment = yield (0, exports.getAppointmentByIdService)(id);
    if (foundAppointment.status == "cancelled")
        throw new Error("The appointment is cancelled");
    foundAppointment.status = "cancelled";
    const results = yield data_source_1.appointmentRepository.save(foundAppointment);
    return results.id;
});
exports.cancelAppointmentsService = cancelAppointmentsService;
