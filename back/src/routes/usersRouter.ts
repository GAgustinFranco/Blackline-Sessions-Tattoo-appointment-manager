import {Router} from "express";

const appointmentsRouter = Router ();

appointmentsRouter.get("/")
appointmentsRouter.get("/:id")
appointmentsRouter.post("/schedule")
appointmentsRouter.put("/cancel/:id")


export default appointmentsRouter;