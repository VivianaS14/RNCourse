import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>By Bummy_99</Text>
      </View>
      <Text style={styles.title}>Hello World</Text>
      <Separator />
      <Button
        title=" Say Hi! "
        color="#f194ff"
        onPress={() => Alert.alert("Hi there! 🌞")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#eee",
    padding: 10,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#303030",
  },

  text: {
    color: "#303030",
    fontSize: 16,
  },

  separator: {
    marginVertical: 15,
    backgroundColor: "#303030",
    height: 3,
    width: "50%",
  },

  button: {
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
