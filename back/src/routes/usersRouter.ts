import {Router} from "express";
import { getUserByIdController, getUsersController, loginUsersController, registerUsersController } from "../controllers/usersController";

const usersRouter = Router ();

usersRouter.get("/", getUsersController)

usersRouter.get("/:id", getUserByIdController)

usersRouter.post("/register", registerUsersController)

usersRouter.post("/login", loginUsersController)


export default usersRouter;