# Yay-Nay Movies

Yay-Nay Movies (formally Inconceivable Movie Reviews) is a Nx project that utilizes Next.js, Typescript, React, and MongoDb to allow users to create, read, update, and delete reviews for their favorite movies! This is a project that was built for Biproxi's take-home assignment. Coming into the project, I had not intereacted with Next.js, MongoDb, Mongoose, Mongo Express, Tailwind, or E2E testing (Cypress). Over the course of the week, I was able to learn enough about each of these technologies to create a functioning, full-stack movie-rating app. Learning several technologies at once proved challenging, but I am proud that I was able to create the app with all of these unfamiliar technologies working together.

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run start`:

    git clone https://github.com/kadeillian21/take-home-assignment
    npm install
    npm run start

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Configuring

In order to talk to your MongoDb database, you will have to use the `MONGO_URI=""` variable in a .env.local file in the root of "inconceivable-movie-reviews". Since this app utilizes a local database, I did not choose to git.ignore this file becuase I wanted it to be as simple as possible for people to download this app to their local machine and get it running as quickly as possible. That being said, the variable should already be in place. Use the ports specified in the docker-compose.yml file and the database connection should be working.

This project also utilizes Docker. To run Docker, simply run this command to create a Docker container that will connect Mongo Express with your Mongo database: `docker-compose up -d`

This should conclude setting up your local MongoDb database. In summary, run `npm install && npm run start`, run `docker-compose up -d`, and then visit http://localhost:4200/ to see the app in the browser. In order for the app to function properly in the browser, you need at least once Movie document in your database for the app to run. If you do not already have documents to interact with your app in your database, visit the following link to create a new movie: http://localhost:4200/initialize and fill out the 'Add Movie' form to create your first Movie document! The app should now be functioning!

## Possible Future Implementations

As I only alloted myself a week of time to work on this project, there are numerous features that I was unable to fully build out or even begin to implement. The most apparent of these features is the 'Movie Rating' attribute. Currently, the attribute is only a string of astrics that rate the movie based on how many stars there are. At the present time, there is no REGEX check to force users to only user astrics. Futhermore, I also wanted to add a rating of 'Terrible' for any movie that Tom Hanks stars in per the take home assignment's instructions. This presented several challenges for me that I was unable to address in the amount of time that I had. I think if I were to come back and finish this feature, I would want to use some sort of ternary to allow users to either rate based on stars (using some sort of React library most likely) or select a terrible button if Tom Hanks was the star actor. A more advanced, comprehensive feature would cause the movie rating to automatically change to terrible if, using an API, the API found that Tom Hanks was the star of the movie.

I also would have liked to have experimented more with the different types of rendering that Next.js offers. Currently, any calls to the backend are done with getServerSideProps. This certainly works for my purposes and the size of the dataset that I am using, but it could also have been advantageous to utilize getStaticProps or client-side-rendering in different portions of the application as well.

Lastly, I would have liked to implement a sorting feature for movies' index actions. I would certainly want to be able to sort the movies from best to worst or wost to best depending on the movie's rating.

## Summary

I hope you enjoyed interacting with my project! As I said before, learning all of these technologies in a week proved challenging, yet, I am proud to say that I was able to meet the challenge and produce a simple CRUD app that meets the scope of the take home assignment. I believe that I would be a great fit at Biproxi because of my ability to learn new material quickly, my expereince with both JS/TS frameworks and fullstack Rails frameworks (allowing me to work on whichever side of the business that is deemed necessary at the time), and because of my passion for all things finances! Working at CRE startup would provide me with a great deal of experience in relavent web technologies, experience in the startup world, and would allow me to work on a small team of people that is just as excited to see the company succeed as I would be. There are many more reasons why I would be thrilled to work for Biproxi, and I hope to meet you all sometime in the near future! Thank you for your time!
