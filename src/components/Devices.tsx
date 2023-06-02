import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView,Button,Image, Center } from 'native-base'
import { color } from 'native-base/lib/typescript/theme/styled-system'

function Example() {
  return <Center>
      <Image source={{
      uri: "/assets/images/bulb-icon 1.png"
    }} alt="Alternate Text" size="xl" />
    </Center>;
}





export default function Devices() {
  return (
    <View style = {styles.container}>
        <Text style = {styles.headingTest} >Devices</Text>
        
        <ScrollView>
                <View style = {styles.cardDevices}>
                   
                    
                    <Text  style = {styles.cardText} fontSize="xs">Text</Text>
                    
                    
                </View>
                
                
                
                
            </ScrollView>


        {/* <Button style={styles.button} size='lg' onPress={()=>{
            console.log('hello')
            }}

            >
            Add Device
        </Button> */}

        <Text  >Text</Text>
        <Example/>
         
      
           <View>
            
           </View>
           
            
       
        
        


        
       
    </View>

    
    
    
  )
}

const styles = StyleSheet.create({

    container:{

    marginTop:30,
},

       headingTest:{
        fontSize:24,
        fontWeight:'900',
        marginLeft:8,
        marginBottom:10



    },

    button:{
        
        color:'black',
        backgroundColor:'black',
  height:50,
  borderWidth:3,
  
  borderRadius:10,
},

    cardAddDevice:{
        width:'100%',
        backgroundColor:'E1D3FF',
        height:55,
        borderRadius:10,
        alignContent:'center',
        alignItems:'center'
    },

    cardDevices:{
        
        height:55,
        backgroundColor:'#E1D3FF',
        borderRadius:15,
        margin:5,
        
    },

    cardText:{
        color:'white',
        fontSize:24,
        fontWeight: 'bold',
        marginTop:10
        

    }


})