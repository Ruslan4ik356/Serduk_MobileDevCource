import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { formStyles } from "../../styles/formStyle";

export default function Request() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
  });

  const submit = () => {
    Alert.alert("Успіх", "Заявку відправлено");

    setForm({
      name: "",
      surname: "",
      email: "",
      phone: "",
      city: "",
    });
  };

  return (
    <View style={formStyles.container}>
      <Header title="Заявка" />

      <TextInput
        style={formStyles.input}
        placeholder="Ім'я"
        value={form.name}
        onChangeText={(t) => setForm({ ...form, name: t })}
      />

      <TextInput
        style={formStyles.input}
        placeholder="Прізвище"
        value={form.surname}
        onChangeText={(t) => setForm({ ...form, surname: t })}
      />

      <TextInput
        style={formStyles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(t) => setForm({ ...form, email: t })}
      />

      <TextInput
        style={formStyles.input}
        placeholder="Телефон"
        value={form.phone}
        onChangeText={(t) => setForm({ ...form, phone: t })}
      />

      <TextInput
        style={formStyles.input}
        placeholder="Місто"
        value={form.city}
        onChangeText={(t) => setForm({ ...form, city: t })}
      />

      <TouchableOpacity style={formStyles.button} onPress={submit}>
        <Text style={formStyles.buttonText}>Відправити</Text>
      </TouchableOpacity>
    </View>
  );
}
