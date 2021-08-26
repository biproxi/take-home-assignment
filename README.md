## Task
Your task is to build a full-stack "TodoItem" Application in TypeScript. There are two discrete components to this system: A web client that will allow the user to interact with the application and a back-end API that the web client interacts with to store and retrieve data. Each component should run in its own process, however the entire project should be contained in a single git repository. The system does not need to support multiple users or persist data between application restarts though several bonus tasks including adding data persistence are outlined in the sections below. The final step is packaging the application in a manner that makes starting the application in development mode easy. The completed version should take no longer than 6 hours to produce but will take significantly less for candidates familiar with the required toolchain. Some implementation details are intentionally left to your discretion. This helps us determine your familiarity with the TypeScript ecosystem and best-practices.

The two models you will need are provided:

```.ts
enum TodoStatusEnum {
  Active = 'Active', // the todo has is not completed
  Inactive = 'Inactive', // the todo is completed
  Archived = 'Archived', // the todo is archived (bonus)
}

interface TodoItem {
  title: string; // the title of the todo
  status: TodoStatusEnum; // the status of the todo
  lastUpdatedAt: number // a unix timestamp representing the time the todo was last updated
  createdAt: number; // a unix timestamp representing the time the todo was created
}
```

### Getting Started
Fork this repository into your GitHub account. When you are finished, make a pull request back to this repository. Include a short summary of your experience completing this project in the pull request description. 

## Front-end Application
Bootstrap the front-end application however you best see fit. We recommend using a tool like [create-react-app](https://github.com/facebook/create-react-app). The front-end should make HTTP requests to the backend to retrieve, create, and update todos. Style your front-end as best you see fit (this is not part of the grading). Your application will be graded on the following criteria:

### Requirements
- [ ] The user can create a todo with a title via a form.
- [ ] The user can view a table of todos.
- [ ] The user can edit the status and title of a to do via the todo table.
- [ ] The user can delete a todo via the todo table
- [ ] The user can archive a todo (Bonus Task)
- [ ] The user can view a table of archived todos at the `/archived` endpoint (Bonus Task)

### Tools
- [ ] [React](https://github.com/facebook/react) for the view layer
- [ ] [Redux](https://github.com/reduxjs/redux.git) for state management (do not use React.useState or React.useContext)
- [ ] [styled-components](https://github.com/styled-components/styled-components) for CSS
- [ ] [Axios](https://github.com/axios/axios) or [Apollo GraphQL](https://github.com/apollographql/apollo-client) (Bonus Task) for data fetching 


## Back-end Application
Bootstrap the back-end application however you best see fit. The back-end should accept HTTP requests from the front-end and retrieve, create, and update todos stored in memmory. The backend DOES NOT need to support multiple users, authentication, or persist todos between restarts. You may add support for authentication or persistence as a bonus task. Your application will be graded on the following criteria:

### Requirements
- [ ] The back-end has a endpoint that allows for the creation of a todo
- [ ] The back-end has an endpoint that allows all todos to be retrieved as a list
- [ ] The back-end has an endpoint that allows a todo to be edited
- [ ] The back-end has an endpoint that allows a todo to be deleted
- [ ] The back-end requires a user to be authenticated to take the above actions (Bonus Task)
- [ ] The back-end persists todos between restarts (Bonus Task)

### Tools
- [ ] [Express](https://github.com/expressjs/express) or [Koa](https://github.com/koajs/koa)
- [ ] [GraphQL](https://github.com/apollographql/apollo-server#readme) (Bonus Task)


## Operations Tasks
- [ ] Provide a single `make run` command that will install all dependencies and start the applications
- [ ] Provide a single `make build` command that builds the both the front-end and back-end applications into Docker images and tags them as `latest` (Bonus Task)
- [ ] Provide a single `make docker-run` command that builds both applications as Docker containers and runs them in a manner that allows them to communicate (Bonus Task)

