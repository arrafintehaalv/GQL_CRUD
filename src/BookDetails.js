import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from 'react-apollo';
import {getBookQuery} from '../gql/queries/Query/query';

const BookDetails = ({selected}) => {
  const {loading, error, data} = useQuery(getBookQuery, {
    variables: {id: selected},
  });
  console.log(data);
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
      <View style={{paddingTop: 15}}>
        <Text style={{fontSize: 20, color: 'green'}}>You Selected</Text>
      </View>
      {data.book === null ? (
        <View style={{padding: 10}}>
          <Text style={{color: 'blue', fontSize: 25}}>No Book Selected !</Text>
        </View>
      ) : (
        <View style={{padding: 10}}>
          <Text style={{color: 'red'}}>Book Name: {data.book.name}</Text>
          <Text style={{color: 'red'}}>
            Author Name: {data.book.author.name}
          </Text>
          <Text style={{color: 'red'}}>Genre: {data.book.genre}</Text>
          <View style={{paddingVertical: 15}}>
            <Text style={{fontSize: 20, color: 'navy'}}>
              Other Books By This Author:{' '}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            {data.book.author.books.map(book => {
              return <Text>@{book.name}</Text>;
            })}
          </View>
        </View>
      )}
    </>
  );
};

export default BookDetails;
