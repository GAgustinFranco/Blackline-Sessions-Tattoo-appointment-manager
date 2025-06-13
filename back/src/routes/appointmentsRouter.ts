import {Router, RequestHandler} from "express";
import { cancelAppointmentsController, createAppointmentsController, getAppointmentByIdController, getAppointmentsController, getAppointmentsByUserIdController } from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/appointment", getAppointmentsController)

appointmentsRouter.get("/appointment/:id", getAppointmentByIdController)

appointmentsRouter.post("/appointment/schedule", createAppointmentsController)

appointmentsRouter.put("/appointment/cancel/:id", cancelAppointmentsController)

appointmentsRouter.get("/appointment/user/:userId", getAppointmentsByUserIdController as RequestHandler<{ userId: string }>);

export default appointmentsRouter;

