class ApiError extends Error {
    constructor(statusCode, message = "somethings wend wrong", error = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.message = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };