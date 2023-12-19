import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ goal, onDelete }) {
  return (
    <Pressable
      onPress={onDelete}
      android_ripple={{ color: "#D5CABD" }}
      // style={({ pressed }) => pressed && styles.pressedItem} // for IOS
    >
      {/* Using View to wrap Text is to be support in all platforms (IOS && android) */}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#503E6B",
  },

  goalText: {
    fontSize: 16,
    color: "#f1f1f1",
  },

  pressedItem: {
    backgroundColor: "#2421fc",
  },
});
