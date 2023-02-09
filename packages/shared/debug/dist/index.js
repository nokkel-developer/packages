"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDebug = void 0;
const debug_1 = __importDefault(require("debug"));
const createDebug = (nameSpace) => {
    debug_1.default.disable();
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "staging") {
        debug_1.default.enable("NOKKEL:*");
    }
    else {
        debug_1.default.enable("NOKKEL:*:INFO,TSF:*:ERROR");
    }
    // STDOUT Log
    const log = (0, debug_1.default)(`NOKKEL:${nameSpace}:`);
    // Error Log
    const error = log.extend("ERROR");
    // Info Log
    const info = log.extend("INFO");
    return {
        error,
        log,
        info,
    };
};
exports.createDebug = createDebug;
