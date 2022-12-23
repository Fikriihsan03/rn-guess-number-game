import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import TextInstructions from "../components/ui/TextInstructions";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";

interface IProps {
  numberToGuess: number;
  onGameOver: (totalRound: number) => void;
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
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  useEffect(() => {
    if (currentGuess === numberToGuess) onGameOver(guessRounds.length);
  }, [currentGuess, numberToGuess, onGameOver]);

  useEffect(() => {
    maxBoundary = 100;
    minBoundary = 1;
  }, []);

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
    setGuessRounds((prevRounds) => [nextGuessNumber, ...prevRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <TextInstructions style={styles.instructionText}>
          Higher or Lower
        </TextInstructions>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guessedNumber={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
    margin: 4,
  },
  instructionText: {
    marginBottom: 20,
  },
  logListContainer: {
    flex: 1,
    padding: 12,
  },
});
