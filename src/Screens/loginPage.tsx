import React, { useState } from "react";
import { Input, Icon, Stack, Pressable, Center,show, setShow, NativeBaseProvider , Text,Box, Button,Heading,VStack,FormControl,Link,HStack, View, Spinner} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import * as firebase from "firebase/app";
import { createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword ,sendPasswordResetEmail} from "firebase/auth";
import {auth} from '../config/firebase';
import { useNavigation } from "@react-navigation/native";
import AuthStack from "../navigation/AuthStack";

const LoadingScreen = () => {
  return <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Logging In
      </Heading>
    </HStack>;
};




const Login = () => {

  
const navigation  = useNavigation()
 const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

// const loginuser =async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password)
//     .then(() => {
//     if(auth.currentUser == null){
      
//     }
//     console.log('User signed in!');
    
    



//   })
    
//   } catch (error) {
//      const errorCode = error.code;
//     const errorMessage = error.message;
    
//   }
// }





const handlePasswordReset = async (email) => {
  await sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("password reset email has been sent to the registered email")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}














  const handleSignup =  () =>{

signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    if(auth.currentUser == null){
      
    }
    console.log('User signed in!');
    
    



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
}


  return <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading alignContent='center' alignItems='center' marginTop='30' fontSize='3xl' fontWeight="900" color="black"
        _dark={{
        color: "black"
      }}>
        Hi!
      </Heading>
      <Heading fontSize='3xl' mt="1" _dark={{
        color: "black"
      }} color="black" fontWeight="900" size="3xl">
        Welcome Back
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>

          <Stack space={4} w="100%" alignItems="center">
            <Input onChangeText={text=> setEmail(text)} value={email} borderBottomWidth='2' borderColor= 'black'
            marginTop='5' marginBottom='5' InputLeftElement={
            <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Username" />
            <Input onChangeText={text=> setPassword(text)} value={password} borderBottomWidth='2' borderColor='black' marginBottom='5' type={show ? "text"
              : "password" } InputRightElement={<Pressable onPress={()=> setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off" } />} size={5} mr="2"
            color="muted.400" />
            </Pressable>} placeholder="Password" />
          </Stack>
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500",
           
          }} alignSelf="flex-end" mt="1"  onPress={handlePasswordReset}  >
          Forget Password?
          </Link>
        </FormControl>
        <Button borderRadius='lg' mt="2" colorScheme="indigo" onPress={handleSignup}>
          Login
        </Button>
        <Button borderRadius='lg' mt="2" color='white' >
          New User
        </Button>
        <HStack mt="6" justifyContent="center">

          <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
          Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};



    export default function Loginpage() {
        return (
          <NativeBaseProvider>
            <View >
                <Box   rounded="lg">
                <Login />
               
            
            </Box>
            </View>
            
              
           
            
                
            
          </NativeBaseProvider>
        );
    };
    



