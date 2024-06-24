// Errors
//////////////////////////////////////////
export const ERROR_CODES_BY_KEY = {
    missing_api_key: 401,
    invalid_api_key: 403,
    plan_limit_exceeded: 429,
    not_found: 404,
    internal_server_error: 500,
    invalid_request: 422,
    custom_rate_limit_exceeded: 429,
    authsend_rate_limit_exceeded: 429,
} as const;

export type ERROR_CODE_KEY = keyof typeof ERROR_CODES_BY_KEY;

type IssueDetail = {
    field: string;
    message: string;
};

type Issues = {
    details: IssueDetail[];
};

export interface ErrorResponse {
    type: ERROR_CODE_KEY;
    message: string;
    details?: Issues;
}