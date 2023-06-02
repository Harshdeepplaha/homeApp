import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalCards from './components/horizontalCards'
import Devices from './components/Devices'


export default function Dashboard() {
  return (
    <View>
      <HorizontalCards/>
      <Devices/>
    </View>
    
  )
}

const styles = StyleSheet.create({})