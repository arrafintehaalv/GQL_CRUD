import React from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-client-preset';
import initialState from './gql/constants/initialState';
import resolvers from './gql/resolvers/Resolver';

const cache = new InMemoryCache();
cache.writeData({
  data: {
    ...initialState,
  },
});
const client = new ApolloClient({
  defaults: initialState,
  cache,
  link: new HttpLink({
    uri: Platform.select({
      ios: 'http://192.168.0.137:5000/graphql',
      android: 'http://192.168.0.137:5000/graphql',
    }),
  }),
  resolvers,
});
const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
AppRegistry.registerComponent(appName, () => AppWrapper);
