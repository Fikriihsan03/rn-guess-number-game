import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";

interface IProps {
  children: React.ReactNode;
}

const Title = ({ children }: IProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily:"open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
