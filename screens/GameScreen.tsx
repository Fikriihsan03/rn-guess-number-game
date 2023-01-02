import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import TextInstructions from "../components/ui/TextInstructions";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";
import { Colors } from "../components/constants/Colors";

interface IProps {
  numberToGuess: number;
  onGameOver: (totalRound: number) => void;
}
interface guessLogData {
  hint: string;
  guessedNumber: number | null;
}
const GameScreen = ({ numberToGuess, onGameOver }: IProps) => {
  const [currentGuess, setCurrentGuess] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState<guessLogData[]>([]);

  useEffect(() => {
    if (guessRounds.length > 0) {
      if (guessRounds[0].guessedNumber === numberToGuess) {
        onGameOver(guessRounds.length);
      }
    }
  }, [guessRounds, numberToGuess, onGameOver]);

  function numberInputHandler(enteredNumber: string) {
    if (isNaN(+enteredNumber)) return;
    setCurrentGuess(+enteredNumber);
  }
  function resetInputHandler() {
    setCurrentGuess(null);
  }
  function confirmInputHandler() {
    let hint = "";
    if (currentGuess! <= 0 || currentGuess! > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    if (currentGuess! > numberToGuess) {
      hint = "Too high !";
    }
    if (currentGuess! < numberToGuess) {
      hint = "Too Low !";
    }
    setCurrentGuess(currentGuess);
    setGuessRounds((prevRounds) => [
      { hint, guessedNumber: currentGuess },
      ...prevRounds,
    ]);
    return resetInputHandler();
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* <NumberContainer>Number is between 1 and 100</NumberContainer> */}
      <View style={styles.logListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guessedLog={itemData.item}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Card>
        <TextInstructions>Enter a Number</TextInstructions>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={currentGuess?.toString()}
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
});
