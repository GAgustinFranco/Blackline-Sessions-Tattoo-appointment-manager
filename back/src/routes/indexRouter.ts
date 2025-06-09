import {Router} from "express";
import appointmentsRouter from "./appointmentsRouter";
import usersRouter from "./usersRouter";

const router: Router = Router()

router.use("/appointments", appointmentsRouter)
router.use("/users", usersRouter)

export default router;