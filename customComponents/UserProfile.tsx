import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { UserService } from "../api/services/UserService";

export const UserProfile = ({ userId }: { userId: number }) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);

      try {
        const formattedName = await UserService.getFormattedUserName(userId);
        setUserName(formattedName);
      } catch (error) {
        console.error("Помилка при завантаженні:", error);
        setUserName("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 30 }} />;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.text}>Привіт, {userName}!</Text>
      <Text style={styles.text}>Ваш ID: {userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    elevation: 3,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
