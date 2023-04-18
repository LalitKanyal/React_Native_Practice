import React from 'react';
import {Button, Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://p.kindpng.com/picc/s/563-5634840_cheems-doge-transparent-hd-png-download.png',
  width: 150,
  height: 190,
  
};

const Scroll = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#f0f0f0', justifyContent:'center', alignItems:'center' }}>
<Text style={{fontSize: 30}}>Scroll Now</Text>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Text style={{fontSize:30}}>Scroll More</Text>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Image source={logo} style={{margin:15}}/>
<Button title="Go back" onPress={() => navigation.goBack()} />
<Button title="Go to Flatlist" onPress={() => navigation.navigate('Flatlisting')} />


 </ScrollView>
  )
}

export default Scroll