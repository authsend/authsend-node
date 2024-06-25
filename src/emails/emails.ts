import type { Authsend } from '../authsend';
import type { SendEmailOptions, SendEmailResponse, SendEmailResponseSuccess } from './interfaces';

export class Emails {
    constructor(private readonly authsend: Authsend) {}

    async send(payload: SendEmailOptions): Promise<SendEmailResponse> {
        const data = await this.authsend.post<SendEmailResponseSuccess>('/emails', payload);
        return data;
    }
}
