import {View, Text, Button} from 'react-native';
import React from 'react';

const Cat = props => {
  return (
    <View>
      <Text>Hello, I am {props.name}</Text>
    </View>
  );
};
const Props = ({navigation}) => {
  return (
    <View>
      <Cat name="Jai" />
      <Cat name="Veeru" />
      <Button
        title="Go to State"
        onPress={() => navigation.navigate('State')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Props;
