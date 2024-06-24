# Authsend Node.js SDK

Node.js library for the Authsend API.

## Install

```bash
npm install authsend
```

## Setup

First, you need to get an API key.

```js
import { Authsend } from "authsend";
const authsend = new Authsend("sk_123456789");
```

## Usage

Send your first verification email:

```js
await authsend.emails.send({
  to: "you@example.com",
  from: "Authsend",
});
```

## Verify email address

Verify the OTP sent in the verification email.

```js
await authsend.verify.check({
  id: "041a87ff-60be-4054-a96f-9bf0c7f0beaf",
  otp: "123456",
});
```

## License

MIT License
