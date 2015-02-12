//// [awaitConditionalExpression2.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: number;
declare var p: Promise<number>;
async function func(): Promise<void> {
    var b = a ? await p : a;
}

//// [awaitConditionalExpression2.js]
function func() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            switch (_state.label) {
                case 0:
                    if (!(a))
                        return [3 /*break*/, 2];
                    return [4 /*yield*/, p];
                case 1:
                    _a = _state.sent;
                    return [3 /*break*/, 3];
                case 2:
                    _a = a;
                    _state.label = 3;
                case 3:
                    b = _a;
                    return [2 /*return*/];
            }
        })));
    });
    var b, _a;
}