import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [numberToGuess, setNumberToGuess] = useState<number>();

  function numberInputHandler(enteredNumber: string) {
    setNumberToGuess(+enteredNumber);
  }
  function confirmInputHandler() {
    console.log("pressed");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputNumber}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={numberToGuess?.toString()}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonWrapper}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  inputNumber: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    height: 50,
    width: 50,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
  },
});
