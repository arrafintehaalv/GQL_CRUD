import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {getAuthorsQuery, addBookMutation} from '../gql/queries/Query/query';
import {useMutation} from 'react-apollo';
import Query from './Query';
import FormList from './FormList';

const UIView = () => {
  const [setInfo, {data}] = useMutation(addBookMutation);
  console.log('Data', data);
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
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
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
                });
              }
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: 'green',
  },
});

export default UIView;
