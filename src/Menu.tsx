import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Box , Pressable,HamburgerIcon} from 'native-base';



function HamMenu() {
  return <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>;
}


export default function Menu() {
  return (
    <View>
    
    </View>
  )
}

const styles = StyleSheet.create({})