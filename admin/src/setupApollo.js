import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

import { READER_PATH } from './config';
import { setUser } from 'state';

const client = token =>
  new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) => {
            if (message === 'Operation denied.') {
              setUser(null);
            }
            console.error(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
          });
        if (networkError) console.error(`[Network error]: ${networkError}`);
      }),
      setContext((_, { headers }) => {
        const token = localStorage.getItem('token');
        return {
          headers: {
            ...headers,
            'keep-alive': 'true',
            authorization: token ? `Bearer ${token}` : ''
          }
        };
      }),
      createUploadLink({
        uri: READER_PATH,
        headers: {
          'keep-alive': 'true',
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    ]),
    cache: new InMemoryCache(),
    ssrMode: false,
    name: 'ReaderFront'
  });

export default client;
