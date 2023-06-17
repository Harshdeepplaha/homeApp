import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HorizontalCards from '../components/horizontalCards'
import Devices from '../components/Devices'
import Menu from '../Menu'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Button } from 'native-base'



import { useEffect, useState } from 'react'


import Graph from './graph'

const user = auth.currentUser





const handleSignout = () => {
 if(user !== null){
      auth.signOut().then(() =>{
        alert('you are logged out')
      })
    } 
}











export default function Dashboard() {

useEffect(() =>{




    
})









  return (
    <View style = {styles.container}>
      <Button
        colorScheme="primary"
        onPress={()=>{
          handleSignout
        }}
      
      >
        Signout
      </Button>


      <View  >
        <Graph  />
      </View>
      
      
      <Menu/>
      <HorizontalCards/>
      <Devices/>
      
    </View>
    
  )
}

const styles = StyleSheet.create({

container:{
  marginTop:20
},




})



