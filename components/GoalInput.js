import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // Simple validation to ensure we are not adding Null goals
    if (enteredGoalText.length != 0){
        props.onSubmitGoal(enteredGoalText);
        setEnteredGoalText('');   
    }else {
        return;
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Input Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Submit Goal" onPress={addGoalHandler} color={'#AAAAFF'}/>
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#5050FF',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(255, 255, 255, 0.45)",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    color: '#121238',
    paddingVertical: 16,
    paddingHorizontal: 12,
    width: "100%",
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '33%',
    marginHorizontal: 8,
  },
});
