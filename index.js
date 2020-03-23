import React from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-client-preset';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: Platform.select({
      ios: 'https://graphql.anilist.co',
      android: 'https://graphql.anilist.co',
    }),
  }),
});
const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
AppRegistry.registerComponent(appName, () => AppWrapper);
