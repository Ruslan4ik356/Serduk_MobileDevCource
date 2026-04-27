import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useUserLocation } from "../hooks/useUserLocation";

export default function UserMap() {
  const { location, permission } = useUserLocation();

  if (!permission) {
    return <Text>Потрібен дозвіл на геолокацію</Text>;
  }

  if (!location) {
    return <Text>Отримання координат...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: location.latitude + 0.0003,
            longitude: location.longitude,
          }}
          title="Ваше місцезнаходження"
        />
      </MapView>
    </View>
  );
}
