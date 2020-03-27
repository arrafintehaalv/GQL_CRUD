import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SET_QUERY} from '../gql/queries/Query/query';
import {useMutation} from 'react-apollo';
import Query from './Query';
import FormList from './FormList';

const UIView = () => {
  const [setInfo, {data}] = useMutation(SET_QUERY);
  console.log('Data', data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fedcba'}}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{paddingTop: '10%'}}>
            <Text style={styles.text}>Books List</Text>
          </View>

          <View>
            <Query />
          </View>
          <View style={{paddingTop: '10%', alignItems: 'center'}}>
            <Text style={styles.text}>Create Book</Text>
            <View style={{paddingTop: 10}}>
              <FormList />
            </View>
          </View>
        </ScrollView>

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
                  variables: {id: '3', name: 'Goru', age: 24},
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    color: 'green',
    paddingTop: '10%',
  },
});

export default UIView;
