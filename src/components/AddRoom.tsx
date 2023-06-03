import {  StyleSheet,  View } from 'react-native'
import React, { useState } from 'react'
import { Center, VStack, HStack, Radio, Button,Modal,Text, Box, Input, CheckIcon, FormControl, Select, WarningOutlineIcon} from 'native-base';



const Dropdown = () => {
  return <Center>
      <FormControl w="2xl" maxW="full" isRequired isInvalid>
        <FormControl.Label>Choose service</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="Bedroom" value="ux" />
          <Select.Item label="Living Room" value="web" />
          <Select.Item label="Kitchen" value="cross" />
          <Select.Item label="Dining Room" value="ui" />
          <Select.Item label="Bathroom" value="backend" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>;
};



const Addroom = () => {
  const [showModal, setShowModal] = useState(false);
  
  return <Center>
      <Button size='lg'  style = {styles.adddevice} onPress={() => setShowModal(true)}>Add Device</Button>
      <Modal style = {styles.containerModal} isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content w='100%' maxWidth="360">
          <Modal.CloseButton />
          <Modal.Header>Add Room</Modal.Header>
          <Modal.Body>
            <VStack space={3} style = {styles.container}>

           <Input style = {styles.inputfeilds} mx="3" placeholder="Room Name" w="100%" />
                <Input style = {styles.inputfeilds} mx="3" placeholder="Input" w="100%" />
                <Dropdown  />



                










              
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button style = {styles.submitAddroom} flex="1" onPress={() => {
            setShowModal(false);
            
          }}>
              Add Room
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      
    </Center>;
};



export default function AddRoom() {
  return (
    <View>
      <Addroom/>
    </View>
  )
}

const styles = StyleSheet.create({

    containerModal:{
        
        marginTop:180,
        
        
        
        
        
    },

container:{
  flex:1,
  flexDirection:'column'
    ,    alignItems:'center'

},

inputfeilds:{
    
},


adddevice:{
    backgroundColor:'black',
    width:'100%',
    borderRadius:15,
    height:55,
    marginBottom:5,
    elevation:3
    
},

submitAddroom:{
    backgroundColor:'#5B17EA'
}




})