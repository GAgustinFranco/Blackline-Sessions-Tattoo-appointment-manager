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
exports.validateCredentialServise = exports.createCredentialService = void 0;
const data_source_1 = require("../config/data-source");
const createCredentialService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredentials = yield data_source_1.credentialRepository.create({
        username,
        password,
    });
    const results = yield data_source_1.credentialRepository.save(newCredentials);
    return results;
});
exports.createCredentialService = createCredentialService;
const validateCredentialServise = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCredential = yield data_source_1.credentialRepository.findOneBy({ username });
    if (!foundCredential) {
        throw new Error("The username does not exist");
    }
    if (foundCredential.password != password) {
        throw new Error("Incorrect password");
    }
    return foundCredential.id;
});
exports.validateCredentialServise = validateCredentialServise;
