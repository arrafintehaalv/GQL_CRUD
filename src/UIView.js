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

const UIView = () => {
  const [setInfo, {data}] = useMutation(SET_QUERY);
  console.log('Data', data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#abcdef'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Apollo Client</Text>
        <View>
          <Query />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 100,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
        }}
        onPress={() => {
          {
            setInfo({
              variables: {mediaId: 1, status: 'CURRENT'},
            });
          }
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'pink',
          }}>
          Next ID
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginVertical: '10%',
  },
  text: {
    fontSize: 30,
    color: 'green',
  },
});

export default UIView;
