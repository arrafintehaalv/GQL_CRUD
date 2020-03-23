import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {GET_QUERY, SET_QUERY} from './gql/queries/Query/query';

const App = () => {
  const {loading, error, data} = useQuery(GET_QUERY, {
    variables: {id: 15125},
  });
  const [setId] = useMutation(SET_QUERY);

  function Query() {
    console.log('data', data);
    if (loading) {
      return <Text>{`Loading...`}</Text>;
    }
    if (error) {
      return <Text>{`Error...${error}`}</Text>;
    }

    return <Text>{data.Media.title.romaji}</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Apollo Client</Text>
          {Query()}
        </View>
        <TouchableOpacity
          style={{
            marginTop: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            height: 80,
          }}
          onPress={() => {
            {
              setId({
                variables: {id: 1},
              });
            }
          }}>
          <Text style={{fontSize: 50, color: 'red'}}>Next ID</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: '10%',
  },
  text: {
    fontSize: 30,
    color: 'green',
  },
});

export default App;
