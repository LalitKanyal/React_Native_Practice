// The FlatList component requires two props: data and renderItem. data is the source of information for the list. renderItem takes one item from the source and returns a formatted component to render.

import React from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

const FlatListing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data = {
        [
            {key: 'Ramlal'},
            {key: 'Rahul'},
            {key: 'Binod'},
            {key: 'Chims'},
            {key: 'Dogemon'},
            {key: 'Dogelina'},
            {key: 'Chimtu'},
            {key: 'Vimdhayak Ji'},
        ]
      }
      renderItem={({item})=> <Text style={styles.item}>{item.key}</Text>}
      />
<Button title='Go Back to Scroll' onPress={()=> navigation.goBack()}/>
    </View>
  )
}

export default FlatListing