import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    if (enteredText.trim().length > 0) {
      setErrorMessage("");
    }
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      setErrorMessage("Please enter a goal before submitting!");
      return;
    }
    props.onSubmitGoal(enteredGoalText);
    setEnteredGoalText("");
    setErrorMessage("")
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal..."
          placeholderTextColor="#ddd"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={addGoalHandler}>
            <Text style={styles.buttonText}>Submit Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#4040D0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    color: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    width: "90%",
    textAlign: "center",
  },
  errorText: {
    marginTop: 16,
    color: '#FF2525',
    fontWeight: 300,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "80%",
    justifyContent: "space-between",
  },
  submitButton: {
    backgroundColor: "#00C896",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#E63946",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
});
