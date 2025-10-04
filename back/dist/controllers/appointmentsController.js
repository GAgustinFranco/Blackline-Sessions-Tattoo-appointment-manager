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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentsByUserIdController = exports.cancelAppointmentsController = exports.createAppointmentsController = exports.getAppointmentByIdController = exports.getAppointmentsController = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const Appointment_1 = __importDefault(require("../entities/Appointment"));
const data_source_1 = require("../config/data-source");
const getAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentsService_1.getAppointmentsService)();
        res.status(200).json({
            success: true,
            data: appointments
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});
exports.getAppointmentsController = getAppointmentsController;
const getAppointmentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointments = yield (0, appointmentsService_1.getAppointmentByIdService)(Number(id));
        res.status(200).json({
            success: true,
            data: appointments
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});
exports.getAppointmentByIdController = getAppointmentByIdController;
const createAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId, status } = req.body;
        const appointments = yield (0, appointmentsService_1.createAppointmentService)({ date, time, userId, status });
        res.status(201).json({
            success: true,
            data: appointments
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});
exports.createAppointmentsController = createAppointmentsController;
const cancelAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointmentsId = yield (0, appointmentsService_1.cancelAppointmentsService)(Number(id));
        res.status(200).json({
            success: true,
            data: appointmentsId
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});
exports.cancelAppointmentsController = cancelAppointmentsController;
const getAppointmentsByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const appointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.default);
        const appointments = yield appointmentRepository.find({
            where: { user: { id: Number(userId) } },
            relations: ["user"],
        });
        res.status(200).json({
            success: true,
            data: appointments,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || "Error fetching appointments",
        });
    }
});
exports.getAppointmentsByUserIdController = getAppointmentsByUserIdController;
