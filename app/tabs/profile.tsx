import { useIsFocused } from "@react-navigation/native";
import { File, Paths } from "expo-file-system/next";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const profileFile = new File(Paths.document, "user_profile.json");

async function loadProfileData(): Promise<{
  name: string;
  lastname: string;
} | null> {
  if (!profileFile.exists) return null;

  const content = await profileFile.text();

  try {
    return JSON.parse(content);
  } catch {
    await profileFile.delete();
    return null;
  }
}

async function saveProfileData(name: string, lastname: string) {
  await profileFile.write(JSON.stringify({ name, lastname }));
}

async function deleteProfileData() {
  if (profileFile.exists) {
    await profileFile.delete();
  }
}

export default function ProfileScreen() {
  const isFocused = useIsFocused();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    const initInputs = async () => {
      const data = await loadProfileData();

      if (data) {
        setName(data.name || "");
        setLastname(data.lastname || "");
      }
    };

    initInputs();
  }, [isFocused]);

  const handleSave = async () => {
    try {
      await saveProfileData(name, lastname);
      Alert.alert("Успіх", "Дані успішно збережено");
    } catch {
      Alert.alert("Помилка", "Не вдалося зберегти дані");
    }
  };

  const handleClear = async () => {
    try {
      await deleteProfileData();
      setName("");
      setLastname("");
      Alert.alert("Успіх", "Дані очищено");
    } catch {
      Alert.alert("Помилка", "Не вдалося очистити дані");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профіль користувача</Text>

      <TextInput
        style={styles.input}
        placeholder="Ім'я"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Прізвище"
        value={lastname}
        onChangeText={setLastname}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Зберегти</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.buttonText}>Очистити</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  saveButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  clearButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
