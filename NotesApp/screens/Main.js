import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default function Main({navigation}) {

  return (
    <View>
        <Text>Main Screen</Text>
        <Button onPress={()=>{navigation.navigate('Page2', {name:'Kuku', age: 34})}}>Go To Page 2</Button>
        <Button onPress={()=>{navigation.navigate('UserTabs')}}>Go To User Tabs</Button>
        <Button onPress={()=>{navigation.navigate('AdminTabs')}}>Go To Admin Tabs</Button>
    </View>
  )
}
