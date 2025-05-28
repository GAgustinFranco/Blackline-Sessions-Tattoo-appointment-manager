import {Router} from "express";
import { cancelAppointmentsController, createAppointmentsController, getAppointmentByIdController, getAppointmentsController } from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/appointment", getAppointmentsController)

appointmentsRouter.get("/appointment/:id", getAppointmentByIdController)

appointmentsRouter.post("/appointment/schedule", createAppointmentsController)

appointmentsRouter.put("/appointment/cancel/:id", cancelAppointmentsController)

export default appointmentsRouter;

