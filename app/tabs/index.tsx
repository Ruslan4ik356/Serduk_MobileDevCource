import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { homeStyles } from "../../styles/homeStyle";

const { height } = Dimensions.get("window");

const data = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i),
  title: `Елемент ${i + 1}`,
  description: "Опис",
  image: `https://picsum.photos/seed/${i + 1}/600/400`,
}));

export default function Index() {
  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={{ uri: item.image }}
      style={[homeStyles.card, { height: height * 0.25 }]}
      imageStyle={{ borderRadius: 15 }}
    >
      <View style={homeStyles.overlay}>
        <Text style={homeStyles.title}>{item.title}</Text>
        <Text style={homeStyles.desc}>{item.description}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={homeStyles.container}>
      <Header title="Головна" />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
