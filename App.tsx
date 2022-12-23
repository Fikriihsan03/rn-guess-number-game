import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Colors } from "./components/constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [numberToGuess, setNumberToGuess] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [totalRounds, setTotalRounds] = useState<number>(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // if (!fontsLoaded) return <AppLoading />;

  let screen = <StartGameScreen onPickNumber={pickNumber} />;

  function pickNumber(number: number) {
    setNumberToGuess(number);
    setIsGameOver(false);
  }
  function gameOverHandler(totalRound: number) {
    setIsGameOver(true);
    setTotalRounds(totalRound);
  }
  function ReStartGameHandler() {
    setNumberToGuess(null);
    setIsGameOver(false);
  }

  if (numberToGuess != undefined) {
    screen = (
      <GameScreen numberToGuess={numberToGuess} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && numberToGuess != undefined) {
    screen = (
      <GameOverScreen
        onReStartGame={ReStartGameHandler}
        totalRounds={totalRounds}
        numberToGuess={numberToGuess}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
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
