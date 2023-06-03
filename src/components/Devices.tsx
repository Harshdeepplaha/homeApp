import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView,Button,Image, Center,Switch } from 'native-base'
import AddRoom from './AddRoom';


function Example() {
  return <Center>
      <Image source={{
      uri: "/assets/images/bulb-icon 1.png"
    }} alt="Alternate Text" size="xl" />
    </Center>;
}





export default function Devices() {
  return (
    <View style={styles.container}>
        <View style={styles.devicesHeadingandswitch}>
            <Text style={styles.headingTest}>Devices</Text>
            <Text style = {styles.killSwitchText}>Kill Switch</Text>
        <Switch  colorScheme='danger' style={styles.killswitch}/>
        </View>

        <ScrollView>

            <AddRoom/>
            


            
          
            <View style={styles.cardDevices}>
                <Image style={styles.tinyLogo} source={require('E:/reactnative/homeApp/assets/images/Ac.png')} />


                <Text style={styles.cardText}>Text</Text>
                 <Switch style={styles.switches} offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />


            </View>
            <View style={styles.cardDevices}>
                <Image style={styles.tinyLogo} source={require('E:/reactnative/homeApp/assets/images/Ac.png')} />


                <Text style={styles.cardText}>Text</Text>
                 <Switch style={styles.switches} offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />


            </View>
            <View style={styles.cardDevices}>
                <Image style={styles.tinyLogo} source={require('E:/reactnative/homeApp/assets/images/Ac.png')} />


                <Text style={styles.cardText}>Text</Text>
                {/* <Switch style={styles.switches} /> */}
                 <Switch style={styles.switches} offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />


            </View>
            <View style={styles.cardDevices}>
                <Image style={styles.tinyLogo} source={require('E:/reactnative/homeApp/assets/images/Ac.png')} />

                
                <Text style={styles.cardText}>Text</Text>
                 <Switch style={styles.switches} offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />


            </View>
            <View style={styles.cardDevices}>
                <Image style={styles.tinyLogo} source={require('E:/reactnative/homeApp/assets/images/Ac.png')} />


                <Text style={styles.cardText}>Text</Text>
                 <Switch style={styles.switches} offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />


            </View>
            <View style={styles.cardDevices}>
                <Image style={styles.tinyLogo} source={require('E:/reactnative/homeApp/assets/images/Ac.png')} />


                <Text style={styles.cardText}>Text</Text>
                 <Switch style={styles.switches} offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />


            </View>
            <View style={styles.cardDevices}>
                <Image style={styles.tinyLogo} source={require('E:/reactnative/homeApp/assets/images/Ac.png')} />


                <Text style={styles.cardText}>Text</Text>
                 <Switch style={styles.switches} offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />


            </View>





        </ScrollView>


        {/* <Button style={styles.button} size='lg' onPress={()=>{
            console.log('hello')
            }}

            >
            Add Device
        </Button> */}

        <Text>Text</Text>





        <Example />


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
  height:60,
  borderWidth:3,
  
  borderRadius:10,
},


devicesHeadingandswitch:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
},


addDeviceButton:{
    height:60,
    width:'100%',
    backgroundColor:'black',
    borderRadius:15,
    flex:1,
    flexDirection:'row',
justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginBottom:5

},
addButtonText:{
    color:'white',
    fontSize:20,
    fontWeight:'900'
},

    cardAddDevice:{
        width:'100%',
        backgroundColor:'E1D3FF',
        height:60,
        borderRadius:10,
        alignContent:'center',
        alignItems:'center'
    },

    cardDevices:{
        
        height:60,
        backgroundColor:'#E1D3FF',
        borderRadius:15,
        margin:5,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:3
        
    },

    cardText:{
        color:'white',
        fontSize:14,
        fontWeight: 'bold',
        marginTop:5,
        marginLeft:-150

        

    },

    tinyLogo:{
        height:30,
        width:60,
        margin:10
    },

    killSwitchText:{
        marginTop:8,
        marginLeft:120,
        color:'#BC0000'
    },
    killswitch:{
        marginRight:15,
        marginTop:-10,
        
    },
    switches:{
        marginRight:10,
        
        
    }


})