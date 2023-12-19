import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

export default function GoalInput({ onAddGoal, isVisible, onClose }) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(goal);
    setGoal("");
    onClose();
  }

  return (
    <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your End-Year Goal!"
          value={goal}
          onChangeText={goalInputHandler}
          clearButtonMode="while-editing"
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#D5CABD" onPress={onClose} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#503E6B" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#FEFEDF",
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: "40%",
    marginHorizontal: 8,
  },

  textInput: {
    width: "85%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FCF7FF",
  },
});
