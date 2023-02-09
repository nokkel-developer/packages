import debug from "debug";
type CreateDebugReturnObject = {
    error: debug.Debugger;
    log: debug.Debugger;
    info: debug.Debugger;
};
export declare const createDebug: (nameSpace: string) => CreateDebugReturnObject;
export {};
