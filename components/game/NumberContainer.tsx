import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
interface IProps {
  children: React.ReactNode;
}
const NumberContainer = ({ children }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },
  numberText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
  },
});
