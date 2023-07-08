/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';


const App = () => {
 

  return (
    
    
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    
  );
};



export default App;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:16
  }
})
