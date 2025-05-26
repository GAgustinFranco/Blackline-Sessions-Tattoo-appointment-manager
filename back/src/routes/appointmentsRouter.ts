import {Router} from "express";
import { cancelAppointmentsController, createAppointmentsController, getAppointmentByIdController, getAppointmentsController } from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAppointmentsController)

appointmentsRouter.get("/:id", getAppointmentByIdController)

appointmentsRouter.post("/schedule", createAppointmentsController)

appointmentsRouter.put("/cancel/:id", cancelAppointmentsController)

export default appointmentsRouter;

