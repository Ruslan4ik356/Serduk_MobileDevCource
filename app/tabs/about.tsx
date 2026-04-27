import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Header } from "../../components/Header";

export default function AboutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Про компанію" />

      <Text></Text>
      <Text>+380 99 123 4567</Text>
      <Text>info@company.com</Text>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.4501,
          longitude: 30.5234,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: 50.4501, longitude: 30.5234 }} />
      </MapView>
    </View>
  );
}
