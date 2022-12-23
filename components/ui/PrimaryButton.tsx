import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface IProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const PrimaryButton = ({ children, onPress }: IProps): JSX.Element => {
  return (
    <View style={styles.buttonWrap}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonWrap: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary500,
    padding:16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
