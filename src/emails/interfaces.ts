import type { ErrorResponse } from '../interfaces';

// Send email
//////////////////////////////////////////////
export interface SendEmailOptions {
    to: string;
    from: string;
}

export interface SendEmailResponseSuccess {
    id: string;
}

export interface SendEmailResponse {
    data: SendEmailResponseSuccess | null;
    error: ErrorResponse | null;
}
