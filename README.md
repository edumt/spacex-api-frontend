# spacex-api-frontend

## Info

This project uses a [subset of SpaceX-API](https://github.com/edumt/spacex-api-backend) to show relevant information about future and past rocket launches related to SpaceX.

## Live Preview

[access link](https://spacex-api.onrender.com/)

## Minimum Requirements

Node v14.18+ ([vite requirement](https://vitejs.dev/guide/#scaffolding-your-first-vite-project))

## Running Locally

First, it's important to set your environment variables, following the base .env.example.

To run this project development build, install dependencies, then start the app:

```
$ npm i
$ npm run dev
```

To build this project, install dependencies, then build the app. The compiled static files are output at ./dist folder:

```
$ npm i
$ npm run build
```

## Future Work

Important missing features that should be implemented next:

- Proper loading state on all pages;
- Pagination on relevant pages.
