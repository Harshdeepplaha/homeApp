import { useEffect, useState ,} from 'react';

import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View} from 'react-native';
import { Text } from 'native-base';
import Loginpage from './src/Screens/loginPage';
import Dashboard from './src/Screens/Dashboard';
import { NativeBaseProvider } from 'native-base';
import Signup from './src/Screens/signupPage';
import AddRoom from './src/components/AddRoom';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { auth } from './src/config/firebase';
import AuthStack from './src/navigation/AuthStack';



 const Stack = createNativeStackNavigator();

 function App(){
  

 const [initializing, setInitilizing]= useState('true')
  const [user,setUser] = useState('')

//handeling the user state changes
function onAuthStateChanged(user){
  setUser(user);
  if (initializing) setInitilizing(false);

}

useEffect(()=>{
  const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
  return subscriber;
}, []);

if (initializing) return null; 

if (!user){
  



  return (
    <NativeBaseProvider>

    <Stack.Navigator>
      <Stack.Screen 
      
        name='Login'
        component={Loginpage}
        options={{}} />

        <Stack.Screen
        name='SignUp'
        component={Signup}
        options={{}} />











    </Stack.Navigator>


</NativeBaseProvider>


    
  );}

return(


  <NativeBaseProvider>
  <Stack.Navigator  screenOptions={{ headerShown: false }}>
     <Stack.Screen
        name='dashboard'
        component={Dashboard}
        options={{}} />

        <Stack.Screen
        name='SignUp'
        component={Signup}
        options={{}} />

  </Stack.Navigator>


</NativeBaseProvider>
)








 }


export default () => {

return(
  

  <NavigationContainer>
    <App/>
  </NavigationContainer>


);
 


};  

const styles = StyleSheet.create({
  container: {
    padding:8,
    flex: 1,
    backgroundColor: '#fff',

   
    
  },
});