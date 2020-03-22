import React from 'react';
import {AppRegistry} from 'react-native';
// import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-client-preset';
// Create the client as outlined in the setup guide
const client = new ApolloClient({
  //Assign to your cache property a instance of a InMemoryCache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server.
  link: new HttpLink({
    uri: Platform.select({
      ios:
        'http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id&start=1&rows=10',
      android:
        'http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id&start=1&rows=10',
    }),
  }),
});
const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
AppRegistry.registerComponent(appName, () => AppWrapper);
