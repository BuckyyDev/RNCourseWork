import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#3B3BFF" }}
      onPress={props.onRemoveItem.bind(this, props.id)}
      style={({ pressed }) => [
        styles.goalItem,
        pressed && styles.pressedItem,
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
    marginVertical: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  pressedItem: {
    backgroundColor: "#3B3BFF",
    transform: [{ scale: 0.98 }],
  },
  goalText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});
