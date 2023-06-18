import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from 'react-native';
import firebase, { db } from '../config/firebase';
import { ref, onValue } from 'firebase/database';








// let arr = [30,20,40,65,75,41,87]


let arr = [30,20,40,65,75,41,87]



const Graph = () => {


  const [data, setData] = useState([]);

  useEffect(() => {


 const starCountRef = ref(db, 'sensorData/');
onValue(starCountRef, (snapshot) => {
//   const value = snapshot.val()
  
    const newData = snapshot.val();
      setData(newData);
            arr.shift();
      arr.push(newData);
      
      console.log(arr)
});




   
  }, []);


































//   interface MyData {
//   id: number;
//   name: string;
// }


// const [dataArray, updateDataArray] =  useState<MyData[]>([]);



   
    



    



// for (let i = 0; i<50;i++){
//     console.log(i)
// }

// console.log(dataArray)
    
    
    return (
    <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June", 'july'],
      datasets: [
        {
          data: arr
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  )
    
    
}





  


export default Graph

const styles = StyleSheet.create({


    
})

function updateStarCount(postElement: any, data: any) {
    throw new Error('Function not implemented.');
}
