import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/firebase';

const Graph = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const starCountRef = ref(db, 'sensorData/');
    onValue(starCountRef, (snapshot) => {
      const newData = snapshot.val();
      setData(newData);
    });
  }, []);

  const updateData = (newData: number) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData.shift();
      updatedData.push(newData);
      return updatedData;
    });
  };

  return (
    <View>
      <Text>Bezier Line Chart</Text>
      {data.length > 0 ? (
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                data,
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
