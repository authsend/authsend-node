// src/emails/emails.test.ts
import { afterEach, describe, expect, it } from 'vitest';
import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { Authsend } from '../authsend';
import type { ErrorResponse } from '../interfaces';
import type { SendEmailOptions, SendEmailResponseSuccess } from './interfaces';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const authsend = new Authsend('sk_zKa4RCkoLhm9ost2YjNCctnPjbLw8Nop');

describe('Emails', () => {
    afterEach(() => fetchMock.resetMocks());

    describe('create', () => {
        it('sends email', async () => {
            const response: ErrorResponse = {
                type: 'invalid_request',
                message: 'The request body is invalid.',
            };

            fetchMock.mockOnce(JSON.stringify(response), {
                status: 422,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer re_zKa4RCko_Lhm9ost2YjNCctnPjbLw8Nop',
                },
            });

            const data = await authsend.emails.send({} as SendEmailOptions);
            expect(data).toMatchInlineSnapshot(`
{
  "data": null,
  "error": {
    "message": "The request body is invalid.",
    "type": "invalid_request",
  },
}
`);
        });
    });

    describe('send', () => {
        it('sends email', async () => {
            const response: SendEmailResponseSuccess = {
                id: '71cdfe68-cf79-473a-a9d7-21f91db6a526',
            };
            fetchMock.mockOnce(JSON.stringify(response), {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer re_zKa4RCko_Lhm9ost2YjNCctnPjbLw8Nop',
                },
            });

            const payload: SendEmailOptions = {
                to: 'ben@authsend.dev',
                from: 'Authsend',
            };

            const data = await authsend.emails.send(payload);
            expect(data).toMatchInlineSnapshot(`
{
  "data": {
    "id": "71cdfe68-cf79-473a-a9d7-21f91db6a526",
  },
  "error": null,
}
`);
        });
    });
});
