<h1 align="center">
  <img src="./public/Logo.png" alt="westCorner Logo" width="130"/>
  <br/>
  westCorner — Restaurant Discovery & Reservation
</h1>

<p align="center">
 <a href="https://westcorner-restaurant.vercel.app" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/Website-EA580C?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website"/>
 </a>
 <a href="https://react.dev/" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/reactjs-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="ReactJS"/>
 </a>
 <a href="https://vite.dev/" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
 </a>
 <a href="https://tailwindcss.com/" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"/>
 </a>
 <a href="https://www.w3schools.com/js/" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript"/>
 </a>
 <a href="https://reactrouter.com/" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router"/>
 </a>
 <a href="https://vercel.com/" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
 </a>
 <a href="https://github.com/" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/github-181717?&style=for-the-badge&logo=github&logoColor=white" alt="Github"/>
 </a>
</p>

## Project

Description:
This project is a frontend web application for discovering and booking tables at western restaurants, built with React and Vite. Users can search, filter and sort a curated catalogue of restaurants, open an Airbnb-style detail page with a photo lightbox, opening hours, menu highlights, reviews and a location map, then complete a two-step reservation with seating times generated from each restaurant's own opening hours. Restaurants can also be saved to a personal list that persists in `localStorage`. The catalogue is bundled with the app, so there is no backend or database, and the interface is built on a custom Tailwind design system organised with Atomic Design.

## Screenshots

| Homepage | Catalogue — search, filter, sorting |
|---|---|
| ![Homepage](docs/screenshots/home.jpg) | ![Catalogue](docs/screenshots/listing.jpg) |

| Restaurant detail — photo mosaic + booking panel | Photo lightbox |
|---|---|
| ![Detail](docs/screenshots/detail.jpg) | ![Lightbox](docs/screenshots/lightbox.jpg) |

| Detail — menu, amenities, opening hours | Reservation — slots from opening hours |
|---|---|
| ![Detail Body](docs/screenshots/detail-body.jpg) | ![Booking](docs/screenshots/booking.jpg) |

| Saved restaurants |
|---|
| ![Saved](docs/screenshots/saved.jpg) |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) + [Vite 5](https://vite.dev) |
| Routing | [React Router 6](https://reactrouter.com) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) + custom design system (colour, typography, elevation and easing tokens) |
| Component architecture | Atomic Design — atoms → molecules → organisms → templates → pages |
| State | React hooks; favourites via `useSyncExternalStore` over `localStorage` |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Feather, Font Awesome, Lucide, Material) |
| Fonts | [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) + [Inter](https://fonts.google.com/specimen/Inter) (UI) |
| Map | [OpenStreetMap](https://www.openstreetmap.org) raster tiles (no map dependency) |
| Deployment | [Vercel](https://vercel.com) with SPA rewrite |

## Project Structure

```
src/
├── App.jsx                     route definitions
├── index.css                   base styles + shared component classes
├── data/
│   ├── restaurants.js          catalogue + derived helpers
│   └── amenities.js            amenity key → label + icon
├── lib/
│   ├── format.js               initials, plurals, dates, currency, hrefs
│   ├── pricing.js              bill estimate + service fee
│   └── booking.js              occasions, guest limit, form validation
├── hooks/
│   ├── useFavorites.js         localStorage-backed favourites store
│   └── useBooking.js           date / time / guests + slots + bill
├── components/
│   ├── atoms/                  Button, Chip, Badge, Rating, Stars, Avatar,
│   │                           StatusPill, Eyebrow, Divider, Logo, Reveal,
│   │                           SectionLink
│   ├── molecules/              SectionHeading, SearchField, ChipGroup,
│   │                           FormField, TextField, GuestStepper,
│   │                           PriceBreakdown, EmptyState, FeatureList,
│   │                           FactList, DetailSection, ServiceCard,
│   │                           RestaurantCard, ReviewCard
│   ├── organisms/              Navbar, Footer, Hero, BrandMarquee,
│   │   │                       AboutSection, RestaurantListing,
│   │   │                       RestaurantGrid, ReservationBanner
│   │   ├── detail/             DetailHeader, DetailGallery, DetailOverview,
│   │   │                       DetailMenu, DetailAmenities, DetailHours,
│   │   │                       DetailReviews, DetailLocation, StaticMap,
│   │   │                       BookingPanel, MobileReserveBar
│   │   └── booking/            BookingForm, BookingSummary,
│   │                           BookingConfirmation
│   └── templates/              PageLayout, ScrollToTop
└── pages/                      Home, RestaurantDetail, Booking, Saved, NotFound
```

## Setup

#### 1. Clone the repository

Clone the project and move into the folder:

```
git clone https://github.com/RizqGyx/Restaurant-react.git
cd Restaurant-react
```

#### 2. Node.js

To install all packages listed in your package.json file, use the following command:

```
npm install
```

Requires Node 18 or newer. There are no environment variables and no database setup.

#### 3. Start server

To run the server, you can use the following command:

```
npm run dev
```

To See The Interface, You can use this route:

```
http://localhost:5173
```

#### 4. Other commands

```
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # eslint, zero warnings
```
