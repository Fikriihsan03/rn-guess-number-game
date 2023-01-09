import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "../components/constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

interface IProps {
  totalRounds: number;
  numberToGuess: number;
  onReStartGame: () => void;
}

const GameOverScreen = ({
  totalRounds,
  numberToGuess,
  onReStartGame,
}: IProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone need <Text style={styles.highlight}>{totalRounds}</Text>{" "}
        round to guess the{" "}
        <Text style={styles.highlight}>{numberToGuess}.</Text>
      </Text>
      <PrimaryButton onPress={onReStartGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 2,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 25,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
