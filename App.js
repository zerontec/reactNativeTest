import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreem from './components/HomeScreem';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Detail from './components/Detail';

const Stack = createStackNavigator();



export default function App() {
  
  return (
<NavigationContainer>
<Stack.Navigator>
   
   <Stack.Screen 
   
   name= 'Home'
   component={HomeScreem}
   />
 <Stack.Screen 
   
   name= 'Detail'
   component={Detail}
   />

 

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
