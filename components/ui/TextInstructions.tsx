import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";
interface IProps {
    children:React.ReactNode
    style?:object
}
const TextInstructions = ({children,style}:IProps) => {
    return ( <Text style={[styles.instructionText,style]}>{children}</Text> );
}
 
export default TextInstructions;
const styles = StyleSheet.create({
    instructionText:{
        fontSize:24,
        color:Colors.accent500,
        fontFamily:'open-sans'
    }
})