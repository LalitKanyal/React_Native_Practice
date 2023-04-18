import {Button, Text, View} from 'react-native';
import React, {useState} from 'react'

const Human = props => {
    const [isHungry, setIsHungry] = useState(true)

    return (
        <View>
            <Text>
                I am {props.name}, I am {isHungry ? 'hungry' : 'full'}!!
            </Text>
            <Button
            onPress={() => {
                setIsHungry(false);
            }}
            disabled={!isHungry}
            title={isHungry ? 'Give me food please' : 'Thank you!'}
            />
        </View>
    )
}

const State = ({navigation}) => {
  return (
    <View>
      <Human name="Lala"/>
      <Human name="Chims"/>
    <View>
      <Button title='Go to TextInputs' onPress={()=> navigation.navigate('TextInputs')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
    </View>
  )
}

export default State