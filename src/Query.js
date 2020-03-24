import React from 'react';
import {GET_QUERY} from '../gql/queries/Query/query';
import {useQuery} from 'react-apollo';
import {Text} from 'react-native';

const Query = () => {
  const {loading, error, data} = useQuery(GET_QUERY, {
    variables: {id: 555},
  });

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
      <Text
        style={{
          fontSize: 20,
          color: 'red',
        }}>{`Romaji: ${data.Media.title.romaji}`}</Text>
      <Text
        style={{
          fontSize: 25,
        }}>{`English: ${data.Media.title.english}`}</Text>
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
        }}>{`Native: ${data.Media.title.native}`}</Text>
    </>
  );
};

export default Query;
