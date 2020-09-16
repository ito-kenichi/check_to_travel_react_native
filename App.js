/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Single1 from './screens/Single1';
import Single2 from './screens/Single2';
import Single3 from './screens/Single3';
import Single4 from './screens/Single4';
const Tab = createMaterialTopTabNavigator();

//import all the components we will need
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={[styles.heading, { backgroundColor: '#aaaaba' }]}>
          <Text style={styles.heading}></Text>
        </View>
        <View style={[styles.heading, { backgroundColor: '#aaaaba' }]}>
          <Text style={styles.heading}>忘れ物チェックリスト</Text>
        </View>
      <Tab.Navigator>
        <Tab.Screen name="１週間前まで" component={Single1} />
        <Tab.Screen name="前日まで" component={Single2} />
        <Tab.Screen name="当日" component={Single3} />
        <Tab.Screen name="現地" component={Single4} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    height: 40,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
});