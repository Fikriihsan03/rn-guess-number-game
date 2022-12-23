import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import { Colors } from "./components/constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [numberToGuess, setNumberToGuess] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  let screen = <StartGameScreen onPickNumber={pickNumber} />;

  function pickNumber(number: number) {
    setNumberToGuess(number);
    setIsGameOver(false);
  }
  function gameOverHandler() {
    setIsGameOver(true);
  }

  if (numberToGuess != undefined) {
    screen = (
      <GameScreen numberToGuess={numberToGuess} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && numberToGuess != undefined) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
