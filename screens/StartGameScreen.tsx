import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../components/constants/Colors";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import TextInstructions from "../components/ui/TextInstructions";
import Title from "../components/ui/Title";

interface IProps {
  onPickNumber: (number: number) => void;
}

const StartGameScreen = ({ onPickNumber }: IProps) => {
  const [pickedNumber, setPickedNumber] = useState<number | null>(null);

  function numberInputHandler(enteredNumber: string) {
    if (isNaN(+enteredNumber)) return;
    setPickedNumber(+enteredNumber);
  }
  function resetInputHandler() {
    setPickedNumber(null);
  }
  function confirmInputHandler() {
    if (pickedNumber! <= 0 || pickedNumber! > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(pickedNumber!);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <TextInstructions>Enter a Number</TextInstructions>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={pickedNumber?.toString()}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 50,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  inputNumber: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    height: 50,
    width: 50,
    fontSize: 30,
    fontFamily: "open-sans-bold",
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
