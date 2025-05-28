import {Router} from "express";
import { getUserByIdController, getUsersController, loginUsersController, registerUsersController } from "../controllers/usersController";

const usersRouter = Router ();

usersRouter.get("/user", getUsersController)

usersRouter.get("/user/:id", getUserByIdController)

usersRouter.post("/user/register", registerUsersController)

usersRouter.post("/user/login", loginUsersController)


export default usersRouter;