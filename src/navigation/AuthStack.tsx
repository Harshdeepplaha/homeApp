import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../Screens/OnboardingScreen';
import Loginpage from '../Screens/loginPage';
import Signup from '../Screens/signupPage';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
   <Stack.Navigator >
    {/* <Stack.Screen name='Onboarding' component={OnboardingScreen}  /> */}
     <Stack.Screen name='Login' component={Loginpage}  />
     <Stack.Screen name='Signup' component={Signup}  />
   </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})