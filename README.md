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
