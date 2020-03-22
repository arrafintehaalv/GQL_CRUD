import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const App = () => {
  const GET_QUERY = gql`
    {
      response {
        docs {
          id
        }
      }
    }
  `;
  const {loading, error, data} = useQuery(GET_QUERY);
  console.log('query', GET_QUERY);
  // const jsonData = data.json();
  function Query() {
    // const {loading, error, data} = useQuery(query);
    console.log('data', data);
    if (loading) return `Loading...`;

    if (error) return `Error! ${error.message}`;
    return data.response.docs.map(ID => {
      console.log(ID);
      ID.id;
    });
  }
  useEffect(() => {
    Query();
  });
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>Apollo Client</Text>
            <Text>{Query()}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
