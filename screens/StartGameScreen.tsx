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
  let maxBoundary: number = 100;
  let minBoundary: number = 1;

  function generateRandomNumber(min: number, max: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
  }

  function confirmInputHandler() {
    onPickNumber(generateRandomNumber(minBoundary, maxBoundary));
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess Number Game</Title>
      <View style={styles.buttonWrapper}>
        <PrimaryButton onPress={confirmInputHandler}>Start Game</PrimaryButton>
      </View>
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});
