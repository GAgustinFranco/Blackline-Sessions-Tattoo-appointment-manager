"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
server_1.default.listen(envs_1.ENV, () => {
    console.log(`Server up and running on port: http://localhost:${PORT}`);
});
