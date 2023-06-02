import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import { Button } from 'native-base'




export default function HorizontalCards() {
  return (
   <View style = {styles.container}>
    <View   style = {styles.contain} >
      <Text  style = {styles.headingTest}>Rooms</Text>

     <Button style = {styles.button} size="sm" variant="subtle" colorScheme="secondary">
            Delete
          </Button>
    </View>
    
    
    
     
    
    
    
     <ScrollView horizontal = {true}>
        <Button style = {styles.addRoom}
          colorScheme="primary"
          onPress={()=>{
            console.log('hello')
          }}
        
        >
          Add Room
        
        </Button>
        
        <View style = {[styles.cardelevated, styles.cards]}>
        <Text style= {styles.cardText} >Text</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
        <Text style= {styles.cardText} >Text</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
        <Text style= {styles.cardText} >Text</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
        <Text style= {styles.cardText} >Text</Text>
        </View>
        <View style = {[styles.cardelevated, styles.cards]}>
        <Text style= {styles.cardText} >Text</Text>
        </View>
        
        
     </ScrollView>



    
     
     
  
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
}

,
button: {
  width: 80,
    height:40,
    borderWidth:3,
    borderColor:'#BC0000',
    borderRadius:10,
}

,

headingTest: {
  fontSize: 24,
    fontWeight:'bold',
    marginLeft:8,
    marginBottom:10
}

,
cards: {
  borderRadius: 15,
    height:130,
    width: 100,
    margin:5,
    backgroundColor:'#EA1763'

}

,

cardText: {
  color: '#fff',
    alignContent:'center',
    fontSize:15,
    marginLeft:35,
    marginTop:70
}

,


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