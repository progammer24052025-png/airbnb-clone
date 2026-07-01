# Airbnb Clone

A full-stack Airbnb clone built with **Node.js**, **Express**, **EJS**, and **Tailwind CSS**.

## Features

- Browse available homes/listings
- View detailed property pages
- Add properties to favourites
- Reserve/book stays
- Host panel to manage listings (add, edit, delete homes)

## Tech Stack

| Layer       | Technology                     |
|-------------|-------------------------------|
| Backend     | Node.js, Express.js           |
| Templating  | EJS                           |
| Styling     | Tailwind CSS                  |
| Dev Server  | Nodemon                       |
| File Upload | Multer                        |

## Project Structure

```
├── controllers/     # Route handlers & error logic
├── data/            # JSON data files (homes, favourites)
├── modals/          # Data models
├── routes/          # Express routers (store & host)
├── utils/           # Utility helpers (path utils)
├── views/           # EJS templates
│   ├── host/        # Host panel views
│   ├── partials/    # Reusable partials (nav, head, favourite)
│   └── store/       # Customer-facing views
├── public/          # Static assets (CSS output)
└── app.js           # Entry point
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

```bash
# Install dependencies
npm install

# Start the dev server (runs app + Tailwind watch)
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description                              |
|---------------|------------------------------------------|
| `npm start`   | Starts Nodemon + Tailwind CSS watch mode |
| `npm run tailwind` | Watches and compiles Tailwind CSS    |

## License

ISC
