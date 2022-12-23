import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";
interface IProps {
    children:React.ReactNode
}
const TextInstructions = ({children}:IProps) => {
    return ( <Text style={styles.instructionText}>{children}</Text> );
}
 
export default TextInstructions;
const styles = StyleSheet.create({
    instructionText:{
        fontSize:24,
        color:Colors.accent500
    }
})