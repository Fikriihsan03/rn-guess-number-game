import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface IProps {
  guessedNumber: number;
  roundNumber: number;
}

const GuessLogItem = ({ roundNumber, guessedNumber }: IProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Opponent Guess : {guessedNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 15,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    color: Colors.primary600,
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
