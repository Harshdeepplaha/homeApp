import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalCards from './components/horizontalCards'
import Devices from './components/Devices'
import Menu from './Menu'


export default function Dashboard() {
  return (
    <View style = {styles.container}>
      <Menu/>
      <HorizontalCards/>
      <Devices/>
    </View>
    
  )
}

const styles = StyleSheet.create({

container:{
  marginTop:20
}

})



