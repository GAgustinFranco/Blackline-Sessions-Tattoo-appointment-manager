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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsersController = exports.registerUsersController = exports.getUserByIdController = exports.getUsersController = void 0;
const usersService_1 = require("../services/usersService");
const credentialsServices_1 = require("../services/credentialsServices");
const data_source_1 = require("../config/data-source");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersService_1.getUserService)();
        res.status(200).json({
            success: true,
            data: users
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.getUsersController = getUsersController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const users = yield (0, usersService_1.getUserByIdService)(Number(id));
        res.status(200).json({
            success: true,
            data: users
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});
exports.getUserByIdController = getUserByIdController;
const registerUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const users = yield (0, usersService_1.createUserService)({ name, email, birthdate, nDni, username, password });
        res.status(201).json({
            success: true,
            data: users
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});
exports.registerUsersController = registerUsersController;
const loginUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const credentialId = yield (0, credentialsServices_1.validateCredentialServise)(username, password);
        const user = yield data_source_1.userRepository.findOne({
            where: { credentialsId: credentialId }
        });
        if (!user) {
            throw new Error("User not found with these credentials");
        }
        res.status(200).json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                birthdate: user.birthdate.toISOString().split("T")[0],
                nDni: user.nDni
            }
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});
exports.loginUsersController = loginUsersController;
