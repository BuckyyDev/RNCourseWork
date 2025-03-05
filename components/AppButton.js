import { Pressable, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function AppButton(props) {
  return (
    <Pressable
      android_ripple={{ color: "#141459" }}
      onPress={props.onPressAction}
    >
      {({ pressed }) => (
        <LinearGradient
          colors={pressed ? ["#3B3BFF", "#5050DD"] : ["#5050FF", "#6666EE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.appButton}
        >
          <Text style={styles.buttonText}>{props.text}</Text>
        </LinearGradient>
      )}
    </Pressable>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  appButton: {
    borderRadius: 6,
  },
  buttonPressed: {
    backgroundColor: "#3838c5",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
