<<<<<<< HEAD
## Your Mission, Should You Choose To Accept It...
Is to create a prototype for a full stack Movie Rating App based on React, Typescript, and MongoDB.

The intention of this is to gauge your familiarity with technologies and how you adapt to the few twists.

Keeping it simple and use best practices where possible!

Good luck, the fate of your career might lie in the balance.


### User Story
As a movie buff, I'd like an application to record my ratings for movies.  I would like it to track the title, the tagline if the movie is memorable, and the rating I give it.  I would also like to know when I initially created the rating and when I updated the rating.  I want to rate movies 1 to 5 stars with an additional rating of 'terrible' for all movies starring Tom Hanks.

```.ts
enum MovieRating {
  FiveStars = '*****',
  FourStars = '****',
  ThreeStars = '***',
  TwoStars = '**',
  OneStar = '*',
  Terrible = '👎'
}

interface Movie {
  title: string; // the title of the movie (required)
  tagline: string; // the tagline of the movie (optional)
  rating: MovieRating; // the rating given to the movie
  lastUpdatedAt: number // a timestamp representing the time the Movie was last updated
  createdAt: number; // a timestamp representing the time the Movie was created
}
```

### Getting Started
Fork this repository into your GitHub account. When you are finished, make a pull request back to this repository. Include a short summary of your experience completing this project in the pull request description. 

## Application
Bootstrap the application using Nx, Next.js, and don't forget Typescript!  Within a matter of minutes you should have a template for the project setup.  We'll want to include E2E testing, so make sure that's there as well.

```.ts
npx create-nx-workspace --preset=next
```

See [Nx.dev](https://nx.dev), [@nrwl/next](https://nx.dev/packages/next), and [Next.js](https://nextjs.org/) for some helpful hints.


CSS up to you.  Both emotion and styled varieties hip.  Bonus for tailwindcss.
No need to hookup to Nx Cloud.


### Requirements
- [ ] There should be a homepage to the app that contains links to /modify and /display pages.
- [ ] The user should be able to create, read, update, and delete movie ratings on the /modify page.
- [ ] The /display page should be server-side-rendered and list all ratings in read-only form.
- [ ] E2E tests should be included for all functions above


## Back-end Application
Bootstrap the back-end application however you best see fit.  Or on the other hand use Next.js API routes

For connection to Mongo, mongoose.  Bonus for GraphQL.

See [API Routes](https://nextjs.org/docs/api-routes/introduction)
See [with-mongodb-mongoose](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose)
See [with-graphql-react](https://github.com/vercel/next.js/tree/canary/examples/with-graphql-react)


### Requirements
- [ ] No database connection secrets should be exposed in the browser.

See [Docker Compose](https://docs.docker.com/get-started/08_using_compose/)


## Operations Tasks
- [ ] Run mongodb locally via docker compose (docker-compose.yml file included)
- [ ] Explore mongodb locally via [mongo express](http://0.0.0.0:8081)  (after starting below)

```.ts
docker-compose up -d
```
=======


# TakeHome

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@take-home/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
>>>>>>> b2a4b0b (initial commit)
