import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import Loginpage from './src/loginPage';
import Dashboard from './src/Dashboard';
import { NativeBaseProvider } from 'native-base';
import Signup from './src/signupPage';
export default function App() {
  return (
<NativeBaseProvider>
<View style={styles.container}>
      
      
      {/* <Loginpage/>
      <Signup/> */}
      <ScrollView style = {styles.container}>
       
      
       <Dashboard/>
      </ScrollView>
      
     
      <StatusBar style="auto" />
    </View>



</NativeBaseProvider>

    
  );
}

const styles = StyleSheet.create({
  container: {
    padding:8,
    flex: 1,
    backgroundColor: '#fff',

   
    
  },
});
