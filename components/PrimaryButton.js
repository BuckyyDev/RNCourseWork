import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed && Platform.OS == 'ios'
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#DDD" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 25,
    margin: 5,
    overflow: "hidden",
    width: '35%',
  },
  buttonInnerContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: "#333",
    fontWeight: 500,
    fontSize: 16,
    textAlign: 'center'
  },
  buttonPressed: {
    backgroundColor: "#DDD",
    transform: [{scaleY: 0.95}, {scaleX: 0.95}]
  },
});
