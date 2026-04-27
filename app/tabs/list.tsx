import { FlatList, Image, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { listStyles } from "../../styles/lists";

export default function List() {
  const API_DATA = [
    {
      id: "1",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Перший",
      role: "CEO",
    },
    {
      id: "2",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Другий",
      role: "Менеджер",
    },
    {
      id: "3",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Третій",
      role: "Продавець",
    },
    {
      id: "4",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Четвертий",
      role: "Охоронець",
    },
    {
      id: "5",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "П'ятий",
      role: "Дистрибьютор",
    },
    {
      id: "6",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Шостий",
      role: "Мерчандайзер",
    },
    {
      id: "7",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Сьомий",
      role: "Бухгалтер",
    },
    {
      id: "8",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Восьмий",
      role: "Адмін",
    },
    {
      id: "9",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Дев'ятий",
      role: "Завхоз",
    },
    {
      id: "10",
      image: "https://reactnative.dev/img/tiny_logo.png",
      name: "Десятий",
      role: "Консультант",
    },
  ];

  interface UserItem {
    id: string;
    image: string;
    name: string;
    role: string;
  }

  const renderItem = ({ item }: { item: UserItem }) => (
    <View style={[listStyles.card, listStyles.row]}>
      <Image source={{ uri: item.image }} style={listStyles.smallAvatar} />
      <View>
        <Text style={listStyles.cardTitle}>{item.name}</Text>
        <Text style={listStyles.cardSubtitle}>{item.role}</Text>
      </View>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={API_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={listStyles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        // ✅ Header (обов’язково)
        ListHeaderComponent={
          <Text style={globalStyles.titleText}>Працівники</Text>
        }
        // ✅ Empty state (обов’язково)
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Список порожній
          </Text>
        }
      />
    </View>
  );
}
