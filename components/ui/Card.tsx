import { StyleSheet, View } from "react-native";

import { Colors } from "../constants/Colors";

interface IProps {
  children: React.ReactNode;
}

const Card = ({ children }: IProps) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
const styles = StyleSheet.create({
  card: {
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
});
