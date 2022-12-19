import { Pressable, StyleSheet, Text, View } from "react-native";

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
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
    paddingVertical: 16,
    paddingHorizontal: 8,
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
