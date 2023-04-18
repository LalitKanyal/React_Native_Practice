import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
//generate icecream per word entered by user
const TextInputs = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={{padding:10}}>
      <TextInput
      style={{height:40, borderWidth:.4}}
      placeholder='Type something..'
      defaultValue={text}
      onChangeText={newTxt=> setText(newTxt)}
      />
      <Text style={{padding: 10, fontSize: 42}}>{text.split(' ').map(word => word && '🍨').join(' ')}</Text>
      {/* <Text style={{padding: 10, fontSize: 42}}>{text.split(' ').map(word => word ? '🍨' : '').join(' ')}</Text> */}
      <Button title="Go to Scroll Page" onPress={() => navigation.navigate('Scroll')} styles={{}} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default TextInputs