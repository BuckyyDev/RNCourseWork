import { StyleSheet, View, Text, Pressable, Platform } from "react-native";

function GoalItem(props) {
  return (
      <Pressable
        android_ripple={{ color: "#141459" }}
        onPress={props.onRemoveItem.bind(this, props.id)}
        style={({ pressed }) => [
          styles.goalItem,
          Platform.OS === "ios" && pressed && styles.pressedItem,
        ]}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5050FF",
    marginBottom: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EEE",
    shadowColor: "#DDD",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: 0,
    padding: 12,
  },
  pressedItem: {
    backgroundColor: "#141459",
  },
  goalText: {
    color: "#FFF",
  },
});
