import React, {useState} from 'react';
import {getBooksQuery} from '../gql/queries/Query/query';
import {useQuery} from 'react-apollo';
import {Text, View, StyleSheet} from 'react-native';
import BookDetails from './BookDetails';

const Query = () => {
  const [selected, setSelected] = useState(null);
  const {loading, error, data} = useQuery(getBooksQuery);
  console.log('All Book Data', data);
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
    <View style={{marginVertical: 10, marginLeft: 10}}>
      <Text style={styles.text}>Books List</Text>
      <View style={{paddingLeft: 10, paddingTop: 10}}>
        {data.books.map(book => {
          return (
            <Text
              onPress={() => {
                setSelected(book.id);
                console.log('BookID', book.id);
              }}
              key={book.id}
              style={{
                fontSize: 16,
                color: 'red',
              }}>
              {book.id}. {book.name}
            </Text>
          );
        })}
      </View>
      <BookDetails selected={selected} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'green',
  },
});

export default Query;
