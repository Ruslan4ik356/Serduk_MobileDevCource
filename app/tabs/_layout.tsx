import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#007AFF",
      }}
    >
      <Tabs.Screen
        name="index" // name має точно збігатися з назвою файлу без розширення
        options={{ title: "Головна" }}
      />
      {/*   <Tabs.Screen name="sandbox" options={{ title: "Пісочниця" }} />  */}
      <Tabs.Screen name="profile" options={{ title: "Профіль" }} />
      <Tabs.Screen name="list" options={{ title: "Список" }} />
      <Tabs.Screen name="network" options={{ title: "Мережа" }} />
    </Tabs>
  );
}
