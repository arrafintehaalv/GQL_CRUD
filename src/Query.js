import React from 'react';
import {GET_QUERY} from '../gql/queries/Query/query';
import {useQuery} from 'react-apollo';
import {Text} from 'react-native';

const Query = () => {
  const {loading, error, data} = useQuery(GET_QUERY);

  console.log('data', data);
  if (loading) {
    return (
      <>
        <Text>{`Loading...`}</Text>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Text>{`Error...${error}`}</Text>
      </>
    );
  }

  return (
    <>
      {data.books.map(book => {
        return (
          <Text
            key={book.id}
            style={{
              fontSize: 20,
              color: 'red',
            }}>
            {book.name}
          </Text>
        );
      })}
    </>
  );
};

export default Query;
