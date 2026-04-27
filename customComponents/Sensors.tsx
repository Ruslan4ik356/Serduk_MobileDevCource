import { Gyroscope } from "expo-sensors";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Sensors() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Gyroscope.setUpdateInterval(300);

    const subscription = Gyroscope.addListener((sensorData) => {
      setData(sensorData);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View>
      <Text>Дані гіроскопа</Text>

      <Text>X: {data.x.toFixed(2)}</Text>
      <Text>Y: {data.y.toFixed(2)}</Text>
      <Text>Z: {data.z.toFixed(2)}</Text>
    </View>
  );
}
