import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native'
import React from 'react'
import { Button, Flex } from 'native-base'




export default function HorizontalCards() {
  return (
   <View style = {styles.container}>
    <View   style = {styles.contain} >
      <Text  style = {styles.headingTest}>Rooms</Text>

     <Button style = {styles.button} size="sm" variant="subtle" colorScheme='danger'>
            Delete
          </Button>
    </View>
    
    
    
     
    
    
    
     <View style = {styles.cardcontainer}>
      <ScrollView horizontal = {true}>
        
        
        <View style = {[styles.addroomButton ]}>
                                    <Image  style={styles.addlogo} source={require('../assets/adddevice.png')} />

        <Text style= {styles.addroomtext} >Add Room</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
                                              <Image style={styles.addlogo} source={require('../assets/adddevice.png')} />

        <Text style= {styles.cardText} >Text</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
                                              <Image style={styles.addlogo} source={require('../assets/adddevice.png')} />

        <Text style= {styles.cardText} >Text</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
                                              <Image style={styles.addlogo} source={require('../assets/adddevice.png')} />

        <Text style= {styles.cardText} >Text</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
                                              <Image style={styles.addlogo} source={require('../assets/adddevice.png')} />

        <Text style= {styles.cardText} >Text</Text>
        </View>
        
        
     </ScrollView>
     </View>
     



    
     
     
  
   </View>
   
   
   
   
    )
}

const styles = StyleSheet.create({

contain: {
  flexDirection: 'row',
    flex:1,
    justifyContent:'space-between',

}

,


container: {

  marginTop: 20,
},
cardcontainer:{
  marginTop:10
}

,
button: {
  width: 80,
    height:40,
    borderWidth:3,
    borderColor:'#BC0000',
    borderRadius:10,
    backgroundColor:'white'
}

,

headingTest: {
  fontSize: 24,
    fontWeight:'900',
    marginLeft:8,
    marginBottom:10
}

,
cards: {
  borderRadius: 15,
    height:130,
    width: 100,
    margin:5,
    backgroundColor:'#5B17EA',
    elevation:3,


    justifyContent:'space-around',
     alignContent:'center',
     alignItems:'center',
     flex:1,
     flexDirection:'column',
     paddingTop:30,
     paddingBottom:-20


}

,


  addroomButton:{
    backgroundColor:'black',
    borderRadius: 15,
    height:130,
    width: 100,
    margin:5,
     elevation:3,
     justifyContent:'space-around',
     alignContent:'center',
     alignItems:'center',
     flex:1,
     flexDirection:'column',
     paddingTop:30,
     paddingBottom:-20

     
  },
  addlogo:{
    marginBottom:-90,
    marginTop:-30
  },

cardText: {
 color: '#fff',
    alignContent:'center',
    fontSize:15,
    fontWeight:'700',
    marginTop:70
}

,

 addroomtext:{
  color: '#fff',
    alignContent:'center',
    fontSize:15,
    fontWeight:'700',
    marginTop:70

 },


cardelevated: {
  elevation: 5
}

,

addRoom: {
  backgroundColor: 'black',
    borderRadius:15, height:130,
    width: 100,
    margin:5,
}


})