
import {
    StyleSheet,
  } from "react-native";
  import { width, height } from "../../utils/constant";
  
  
   const loginStyles = StyleSheet.create({
    mainContainer: {
        height: height - height * 0.06,
      },
      imgContainer: {
        alignItems: "center",
      },
      container: {
        width: "100%",
        paddingHorizontal: width * 0.09,
        paddingVertical: width * 0.05,
        marginTop: width * 0.2,
        marginBottom: width * 0.05,
      },
      
    });
  
    export default loginStyles;