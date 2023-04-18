import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Go to Props' onPress={() => navigation.navigate('Props')}/>
    </View>
  )
}

export default Home