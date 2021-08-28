import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./state/store/store";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: "http://localhost:4000/graphql"}),
    connectToDevTools: true
})

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Provider store={store}>
              <App />
          </Provider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
