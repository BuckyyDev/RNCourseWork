import { useState } from "react";
import { StyleSheet, View, FlatList, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import AppButton from "./components/AppButton";

export default function App() {
  const [modalVisible, setModalVisibility] = useState(false);
  const [userGoals, setUserGoals] = useState([]);
  // Set the padding on the top of the screen depending on the platform being used
  const paddingTop = Platform.OS === "ios" ? 64 : 32;

  function startAddGoalHandler() {
    setModalVisibility(true);
  }
  function endAddGoalHandler() {
    setModalVisibility(false);
  }

  function addGoalHandler(enteredGoalText) {
    setUserGoals((currentUserGoals) => [
      ...currentUserGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function removeGoalHandler(id) {
    setUserGoals((currentUserGoals) => {
      return currentUserGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View style={[styles.addGoalContainer, { paddingTop }]}>
          <AppButton
            text={"Add New Goal"}
            onPressAction={startAddGoalHandler}
          />
        </View>
        {modalVisible && (
          <GoalInput
            visible={modalVisible}
            onSubmitGoal={addGoalHandler}
            onDeleteItem={removeGoalHandler}
            onCancel={endAddGoalHandler}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={userGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onRemoveItem={removeGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  addGoalContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#07070a",
    paddingVertical: 16,
    borderBottomColor: "#050505",
    borderBottomWidth: 1,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  goalsContainer: {
    flex: 11,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
