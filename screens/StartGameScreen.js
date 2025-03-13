import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";

function StartGameScreen() {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#3636c0", "#7676d8"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.containerBackground}
      />
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Start!</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.125)",
    color: '#FFF',
    width: '30%',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 48,
    height: 72,
    borderRadius: 100,
    elevation: 8,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    marginBottom: 16,
  },
  containerBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: 'row'

  }
});
