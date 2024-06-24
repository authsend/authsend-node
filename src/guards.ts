import { ERROR_CODES_BY_KEY, type ErrorResponse } from './interfaces';

export const isAuthsendErrorResponse = (response: unknown): response is ErrorResponse => {
    if (typeof response !== 'object' || response === null) {
        return false;
    }

    const error = response as ErrorResponse;

    if (typeof error !== 'object' || error === null) {
        return false;
    }

    const { type, message } = error;

    return typeof type === 'string' && type in ERROR_CODES_BY_KEY && typeof message === 'string';
};
