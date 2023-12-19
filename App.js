import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Button, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isAddModal, setIsAddModal] = useState(false);
  const [endYearGoals, setEndYearGoals] = useState([]);

  function addGoalHandler(goal) {
    setEndYearGoals((currentGoals) => [
      ...currentGoals,
      { goal, id: goal.length + Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setEndYearGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <>
      {/* This is bar of phone */}
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.title}>Set your End-Year Goals</Text>
        </View>
        <View style={styles.goalsContainer}>
          {/* ScrollView is not recommended due to perform issues */}
          {endYearGoals.length > 0 ? (
            <FlatList
              data={endYearGoals}
              renderItem={({ item }) => (
                <GoalItem
                  goal={item.goal}
                  onDelete={() => deleteGoalHandler(item.id)}
                />
              )}
              keyExtractor={(goal) => goal.id}
            />
          ) : (
            <View style={styles.imageContainer}>
              <Image
                source={require("./assets/images/goal.png")}
                style={styles.image}
              />
              <Text style={styles.imageText}>No Goals for now</Text>
            </View>
          )}
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={isAddModal}
          onClose={() => setIsAddModal(false)}
        />
        <View style={styles.button}>
          <Button
            title="Add New Goal"
            color="#A879F4"
            onPress={() => setIsAddModal(true)}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // We add flex 1 to parent view to take all height available
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#FEFEDF",
  },

  title: {
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#503E6B",
  },

  goalsContainer: {
    flex: 5,
    marginBottom: 10,
  },

  button: {
    marginVertical: 20,
  },

  image: {
    margin: 20,
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageText: {
    fontSize: 18,
  },
});
