import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

interface IProps {
  numberToGuess: number;
  onGameOver: () => void;
}

let maxBoundary: number = 100;
let minBoundary: number = 1;

function generateRandomNumber(
  min: number,
  max: number,
  exclude: number
): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) return generateRandomNumber(min, max, exclude);
  return randomNumber;
}

const GameScreen = ({ numberToGuess, onGameOver }: IProps) => {
  const initialGuess = generateRandomNumber(1, 100, numberToGuess);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === numberToGuess) onGameOver();
  }, [currentGuess, numberToGuess, onGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction == "lower" && currentGuess < numberToGuess) ||
      (direction == "higher" && currentGuess > numberToGuess)
    ) {
      Alert.alert("Dont't lie", "You know your number right ?", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") maxBoundary = currentGuess;
    if (direction === "higher") minBoundary = currentGuess + 1;
    const nextGuessNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(nextGuessNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          +
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
