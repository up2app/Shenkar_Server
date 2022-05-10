import React from 'react';
import {View, Text} from 'react-native';

export default function Page2({route,navigation}) {

  let {name, age} = route.params;

  return (
    <View>
        <Text>Page 2</Text>
        <Text>Hello {name}</Text>
        <Text>Your age is {age}</Text>
    </View>
  )
}
