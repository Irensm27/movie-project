# Movies App

Movies App is a React application for browsing movies using The Movie Database (TMDB) API.

## Technologies

- React
- TypeScript
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- TMDB API

## Installation and project launch

1. Clone the repository.

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory of the project.

4. Add the TMDB API token to the `.env` file:

```env
VITE_TMDB_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTEyZGQzOTQzODhiMDRkNWJhZDBiZWQxNWI5ZjFkZSIsIm5iZiI6MTc4ODEwNDY5MS42MDMwMDAyLCJzdWIiOiI2YTk0NGZmMzAxYjA5MmEyN2M0MjU0N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ataDkmNWWaVcnCErir5XgotxA-Ws2JgCDlqHwfYK50I
```

5. Start the project:

```bash
npm run dev
```

After starting the project, open the URL shown by Vite in the terminal.

## TMDB API Token

The application uses a TMDB API token for authorization.

Add the following variable to the `.env` file:

```env
VITE_TMDB_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTEyZGQzOTQzODhiMDRkNWJhZDBiZWQxNWI5ZjFkZSIsIm5iZiI6MTc4ODEwNDY5MS42MDMwMDAyLCJzdWIiOiI2YTk0NGZmMzAxYjA5MmEyN2M0MjU0N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ataDkmNWWaVcnCErir5XgotxA-Ws2JgCDlqHwfYK50I
```

## Pages

### Movies Page

URL:

```text
/
```

This is the main page of the application.

It contains:

- header;
- user information;
- movie search;
- movie sorting;
- top-rated movies banner;
- genre filters;
- list of movies;
- movie cards with posters, ratings, descriptions and genres;
- pagination.

Movies can be filtered by genre by clicking on a genre.

Movies can be sorted by:

- popularity;
- rating;
- release date.

The search allows users to find movies by the full title or part of the title.

Clicking on a movie card opens the Movie Details Page.

### Movie Details Page

URL:

```text
/movies/:id
```

Example:

```text
/movies/550
```

This page contains detailed information about the selected movie:

- movie title;
- backdrop image;
- poster;
- rating;
- genres;
- release date;
- vote count;
- runtime;
- overview.

The **Back to movies** button returns the user to the main Movies Page.

## Component Structure

The application uses the following component structure:

```text
MainLayout
├── Header
│   ├── Search
│   ├── Sort
│   └── UserInfo
│
└── Outlet
    ├── MoviesPage
    │   ├── MovieBanner
    │   ├── GenreButtonComponent
    │   ├── MoviesList
    │   │   └── MovieListCard
    │   │       ├── PosterPreview
    │   │       ├── StarsRating
    │   │       └── MovieInfo
    │   │           └── GenreBadge
    │   └── Pagination
    │
    └── MovieDetailsPage
```

## Main Functionality

The application supports:

- getting a list of movies;
- getting a single movie by ID;
- searching movies by the full title or part of the title;
- sorting movies by popularity, rating and release date;
- filtering movies by genre;
- pagination;
- viewing detailed information about a selected movie;
- routing between the main page and the movie details page.

## API

The application uses The Movie Database (TMDB) API.

Base API URL:

```text
https://api.themoviedb.org/3
```