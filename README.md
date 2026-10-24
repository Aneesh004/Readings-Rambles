# Readings & Rambles 📚

**Readings & Rambles** is an online reading community for book lovers of all ages. It brings readers together through book clubs, live discussion sessions, monthly reading challenges and curated recommendations, so reading becomes something you do with other people instead of alone.

This repository contains the website that supports the community: a React frontend and a Node.js/Express/MongoDB backend (MERN stack).

## What is Readings & Rambles?

The community is built on the idea that every book opens a new world, and that a great book deserves a great conversation. It runs two groups:

- **Tiny Tales Club**: a guided reading group for children. Young readers tackle exciting books together with friends, which builds confidence and makes reading a team effort.
- **Readers' Circle**: a virtual discussion forum for adults. Members talk about compelling literature without needing to commute or schedule an in-person meetup.

Both groups hold online sessions (on Google Meet) and the community also supports offline meetups. Membership is through a sign-up form linked from the site. Everyone is welcome, from seasoned bibliophiles to people who just want to read more.

## What the website does

| Page | Purpose |
|---|---|
| **Home** | Introduces the community, the two clubs, the monthly events calendar and the month's recommended books. |
| **Activities** (`/course`) | The yearly Reading Challenge: how to take part and a catalogue of featured books. Requires an account. |
| **Reader's Point** (`/contact`) | A form where readers share reviews and thoughts on books. |
| **Explore** (`/explore`) | Search any book by title using the [Open Library](https://openlibrary.org) API. Shows author, first publication year and cover, with a link to look it up on Amazon. |
| **About Us** | The community's mission and vision. |
| **Review Us** (`/review-us`) | Feedback form about the Readings & Rambles experience. |
| **Privacy Policy** | What information is collected and how it is used. |
| **Sign up / Login** | Account creation and sign-in, with a light/dark theme toggle available site-wide. |

## Tech stack

- **Frontend**: React, Vite, React Router, Tailwind CSS + DaisyUI, Axios, React Hook Form, React Slick, React Hot Toast
- **Backend**: Node.js, Express, Mongoose (MongoDB), bcryptjs for password hashing, CORS, dotenv

## Repository structure

```text
bookstore/
├── backend/          # Express API with MongoDB
│   ├── controller/   # Request handlers (books, users)
│   ├── model/        # Mongoose schemas
│   ├── route/        # Route definitions
│   ├── .env.example  # Backend environment template
│   └── index.js      # Server entry point
└── frontend/         # React + Vite client
    ├── src/
    │   ├── api/         # Shared Axios client
    │   ├── components/  # UI components and pages
    │   ├── context/     # Auth context
    │   ├── courses/     # Activities page
    │   └── home/        # Landing page
    └── .env.example  # Frontend environment template
```


>>>>>>> 5f618705a4474e7704baa6e433b8ba7ea18481f1
