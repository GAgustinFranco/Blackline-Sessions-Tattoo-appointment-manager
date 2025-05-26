"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.get("/");
appointmentsRouter.get("/:id");
appointmentsRouter.post("/schedule");
appointmentsRouter.put("/cancel/:id");
exports.default = appointmentsRouter;
