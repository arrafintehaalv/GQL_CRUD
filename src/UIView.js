import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  addBookMutation,
  getLangQuery,
  setLangQuery,
  getBooksQuery,
} from '../gql/queries/Query/query';
import {useMutation, useQuery} from 'react-apollo';
import Query from './Query';
import FormList from './FormList';

const UIView = () => {
  const {language} = useQuery(getLangQuery).data;
  const [setLanguage, {data}] = useMutation(setLangQuery);
  const [setInfo] = useMutation(addBookMutation);
  console.log('Data', data, language);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#abcabc'}}>
      <ScrollView>
        <View style={styles.container}>
          <Query />
          <View style={{paddingTop: '10%', alignItems: 'center'}}>
            <Text style={styles.text}>Create Book</Text>
            <View style={{paddingTop: 10}}>
              <FormList />
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
        }}
        onPress={() => {
          {
            {
              setInfo({
                variables: {
                  name: 'Gaab Alvy',
                  genre: 'Male',
                  authorId: 2,
                },
                refetchQueries: [{query: getBooksQuery}],
              });
            }
            setLanguage({
              variables: {
                language: 'bd',
              },
            });
          }
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'pink',
          }}>
          Mutation
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'green',
  },
});

export default UIView;
