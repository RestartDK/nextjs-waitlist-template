# 🕐 NextJs Waitlist Template Starter

This project is meant to help developers get a head start in building the next big thing with first validating their idea with a waitlist.

![landing page](/public/landing.png)

## ⚙️ Tech Stack
- [Nextjs](https://nextjs.org/)
- [Resend](https://resend.com/)
- [React Email](https://react.email/)
- [Planetscale](https://planetscale.com/)
- [Drizzle](https://orm.drizzle.team/)
- [Nextauth](https://authjs.dev/)

## 📦 Features

- 🔐 User Authentication with Magic Links through Authjs
- 📩 Welcome emails sent with Resend
- 🖌️ Make emails in react with React Email
- 💽 Planetscale as the database
- 💧 Drizzle as the ORM
- 🎨 Clean, Modern UI Using 'shadcn-ui'
- 🔤 100% written in TypeScript

## ✏️ Getting Started

Make a new in a new file called ```.env.local```
```
RESEND_API_KEY=
AUTH_SECRET=
DATABASE_URL=
DATABASE_URL_TEST=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_FROM=
```

Run the development server:

```bash
bun install
bun dev
```

To preview emails:

```bash
bun email dev
```
