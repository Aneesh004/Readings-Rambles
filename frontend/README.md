<<<<<<< HEAD
# Readings & Rambles 

**Readings & Rambles** is an online reading community for book lovers of all ages. It connects readers through book clubs, live discussion sessions, monthly reading challenges and curated recommendations. This is the website's frontend.

## About the community

- **Tiny Tales Club**: a guided reading group for children, where young readers tackle exciting books together and build confidence.
- **Readers' Circle**: a virtual discussion forum for adults to talk about compelling literature without the hassle of a commute.

Sessions are held online on Google Meet, and the community also supports offline meetups. Everyone is welcome, from seasoned bibliophiles to people who just want to read more.

## What the website offers

- **Home**: introduces the community and its two clubs, shows a monthly events calendar that updates its dates automatically, and a carousel of the month's recommended books.
- **Activities**: the yearly Reading Challenge, with instructions for taking part and a catalogue of featured books. Requires an account.
- **Reader's Point**: a form where readers share reviews and thoughts on books.
- **Explore**: search any book by title through the Open Library API, with cover, author, publication year and an Amazon link.
- **About Us, Review Us and Privacy Policy**: the community's mission, a feedback form, and how user information is handled.
- **Accounts**: sign-up, login and logout, with the session kept in local storage.
- **Light / Dark theme**: toggle available on every page, remembered between visits.

Book data comes from the backend API. If the backend is unavailable (for example during a cold start), the Home and Activities pages fall back to a local `public/list.json`.

## Tech Stack

- **Framework**: React 18
- **Bundler**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + DaisyUI
- **Forms**: React Hook Form
- **HTTP Client**: Axios (shared client in `src/api/client.js`)
- **Notifications**: React Hot Toast
- **Carousel**: React Slick
=======

>>>>>>> 5f618705a4474e7704baa6e433b8ba7ea18481f1
