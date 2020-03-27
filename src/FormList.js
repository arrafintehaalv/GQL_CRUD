import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

const FormList = () => {
  const [book, setBook] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{paddingVertical: 10}}>
        <Text>Book Name</Text>
      </View>
      <View style={{width: '100%'}}>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 8,
            width: 200,
            fontSize: 20,
          }}
          onChangeText={val => setBook(val)}
          value={book}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <Text>Genre</Text>
      </View>
      <View style={{width: '100%'}}>
        <TextInput
          style={{
            borderColor: 'gray',
            fontSize: 20,
            borderWidth: 1,
            borderRadius: 8,
            width: 200,
          }}
          onChangeText={val => setGenre(val)}
          value={genre}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <Text>Author</Text>
      </View>
      <View style={{width: '100%'}}>
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 8,
            width: 200,
            fontSize: 20,
          }}
          onChangeText={val => setAuthor(val)}
          value={author}
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log(author, book, genre)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'navy',
          width: '100%',
          height: 50,
          marginVertical: 20,
        }}>
        <Text style={{color: 'pink'}}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FormList;
