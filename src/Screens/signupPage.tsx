import React, {
  useState,
  acti
} from "react";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  show,
  setShow,
  NativeBaseProvider,
  Text,
  Box,
  Button,
  Heading,
  VStack,
  FormControl,
  Link,
  HStack,
  View,
  Alert
} from "native-base";
import {
  MaterialIcons
} from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,sendPasswordResetEmail,
  updateCurrentUser
} from "firebase/auth";

import firebase, {
  auth
} from "../config/firebase";




const SignupPage = () => {
 



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNo, setNo] = useState('')



  const user = auth.currentUser 





const handleSignUp =async (name, email , password, phoneNo) => {


await createUserWithEmailAndPassword(auth, email, password)
  .then(() => {

      if (user !== null) {
        sendEmailVerification(user)
          .then(() => {
            alert('verification email was sent')
          })

      }

    }


    // Signed in 

    // ...
  )

  .catch((error) => {
    alert(error.message)
    // ..
  })
  .then(() => {
    
  })








  
}







  
  return <Center w="100%" marginTop= '20'>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="2xl" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="black">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="lg">
          Sign up to continue!
        </Heading>
        <VStack marginTop='16' space={3} mt="5">
          <FormControl>
            
            <Input onChangeText={text=> setName(text)} value={name} placeholder="Name" />
          </FormControl>
          <FormControl>
            
            <Input onChangeText={text=> setEmail(text)} value={email} placeholder="Email"/>
          </FormControl>
          <FormControl>
            
            <Input onChangeText={text=> setNo(text)} value={phoneNo} placeholder="Phone No"/>
          </FormControl>
          <FormControl>
            
            <Input onChangeText={text=> setPassword(text)} value={password} placeholder="Password" type="password" />
          </FormControl>
          <FormControl>
            
            <Input  placeholder="Confirm password" type="password" />
          </FormControl>
          <Button  onPress={handleSignup}  marginTop='10' mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>;
};






    export default function Signup() {
        return (
          <NativeBaseProvider>
            <View >
                <Box   rounded="lg">
                <SignupPage />
               
            
            </Box>
            </View>
            
              
           
            
                
            
          </NativeBaseProvider>
        );
    };
    


// 
// const styles = StyleSheet.create({
//  inputboxes:{
//   borderWidth: 4,
//     borderColor: 'black',
//     borderRadius: 6,

  
//  }
// });

