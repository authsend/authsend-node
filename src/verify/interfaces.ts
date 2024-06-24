import type { ErrorResponse } from '../interfaces';

// Verify email
//////////////////////////////////////////////
export interface VerifyOptions {
    id: string;
    code: string;
}

export interface VerifyResponseSuccess {
    id: string;
}

export interface VerifyResponse {
    data: VerifyResponseSuccess | null;
    error: ErrorResponse | null;
}
