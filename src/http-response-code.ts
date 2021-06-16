class HttpResponseCode {
    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }

    name: string;
    code: number;
}

export const BAD_REQUEST_RESPONSE_CODE = new HttpResponseCode("Bad Request", 400);
export const UNAUTHORIZED_RESPONSE_CODE = new HttpResponseCode("Unauthorized", 401);
export const FORBIDDEN_RESPONSE_CODE = new HttpResponseCode("Forbidden", 403);
export const NOT_FOUND_RESPONSE_CODE = new HttpResponseCode("Not Found", 404);