import type { Authsend } from '../authsend';
import type { VerifyOptions, VerifyResponse, VerifyResponseSuccess } from './interfaces';

export class Verify {
    constructor(private readonly authsend: Authsend) {}

    async check(payload: VerifyOptions): Promise<VerifyResponse> {
        const data = await this.authsend.post<VerifyResponseSuccess>('/verify', payload);
        return data;
    }
}
