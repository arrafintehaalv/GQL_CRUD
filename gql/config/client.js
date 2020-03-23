import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AsyncStorage from '@react-native-community/async-storage';
import { persistCache, CachePersistor } from 'apollo-cache-persist';
import initialState from '../constants/initialState';
import resolvers from '../resolvers';
import {
  SCHEMA_VERSION_KEY, SCHEMA_VERSION, PRODUCTION_BASE_URL, DEV_BASE_URL
} from '../../config';
import { notificationSnacbar } from '../../utility/function/notificationControl';

const production = {
  base_url: PRODUCTION_BASE_URL
};

const dev = {
  base_url: DEV_BASE_URL
};

const httpLink = createHttpLink({
  uri: dev.base_url
});

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    // do something with graphql error
    console.log('GQL Error: ', graphQLErrors);
    notificationSnacbar('GQL Error');
    // notificationSnacbar();
  }
  if (networkError) {
    // do something with network error
    console.log('Network Error: ', networkError);
    notificationSnacbar('Network Error');
    // console.log('network not available');
  }
  if (response) {
    console.log('GQL Response: ', response);
    notificationSnacbar('Successful!');
  }
});
const cache = new InMemoryCache();

export const setupPersistedCache = async () => {
  const persistor = new CachePersistor({
    cache,
    storage: AsyncStorage,
    maxSize: false,
    debug: true
  });
  // Read the current schema version from AsyncStorage.
  const currentVersion = await AsyncStorage.getItem(SCHEMA_VERSION_KEY);

  console.log('currentVersion', currentVersion);

  if (currentVersion && currentVersion === SCHEMA_VERSION) {
    // If the current version matches the latest version,
    // we're good to go and can restore the cache.
    console.log('nothing to migrate for version: ', currentVersion);
    await persistor.restore();
  } else {
    // Otherwise, we'll want to purge the outdated persisted cache
    // and mark ourselves as having updated to the latest version.
    console.log('migrating cache');
    await persistor.purge();
    await AsyncStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
    console.log('Setting initial state');
    cache.writeData({
      data: {
        ...initialState
      }
    });
    /* console.log('persisting cache');
     await persistCache({
       cache,
       storage: AsyncStorage,
       // trigger: 'write',
       maxSize: false,
       debug: true
     }); */
  }
  // console.log(cache.data);
};

// setupPersistedCache();

const link = ApolloLink.from([errorLink, httpLink]);

export const client = new ApolloClient({
  defaults: initialState,
  link,
  cache,
  resolvers
});

// export default client;
