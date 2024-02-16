
import {
    StyleSheet,
  } from "react-native";
  import { appStyles, width } from "../utils/constant";

  let fonts = appStyles.fonts;
  let fontFamily = appStyles.fontFamily;
  let color = appStyles.color;
  
   const formStyles = StyleSheet.create({
      textInput: {
        borderWidth: 1,
        borderColor: color.GREY,
        padding: width * 0.05,
        fontSize: fonts.FONT_SIZE16,
        fontFamily: fontFamily.robotoRegular,
      },
      textBox: {
        width: "100%",
        marginVertical: width * 0.04,
      },
      label: {
        marginBottom: width * 0.03,
        fontSize: fonts.FONT_SIZE16,
        fontFamily: fontFamily.ralewayLight,
        letterSpacing: width * 0.005,
        color: color.BLACK,
        textTransform: "uppercase",
      },
      button: {
        backgroundColor: color.GREEN,
        padding: width * 0.05,
        marginVertical: width * 0.03,
        width: "100%",
      },
      buttonText: {
        color: color.WHITE,
        textAlign: "center",
        fontFamily: fontFamily.ralewayMedium,
        letterSpacing: width * 0.005,
        fontSize: fonts.FONT_SIZE16,
        textTransform: "uppercase",
      },
      header: {
        textAlign: "center",
        fontFamily: fontFamily.ralewayRegular,
        letterSpacing: width * 0.01,
        fontSize: fonts.FONT_SIZE28,
        textTransform: "uppercase",
        marginBottom: width * 0.1,
        color: color.HEADING,
        marginTop: width * 0.1,
      },
      tinyLogo: {
        height: width * 0.23,
        width: width * 0.23,
      },
      error:{
        color:color.ERROR,
        marginVertical:width*0.01
      },
      linkText: {
        fontSize: fonts.FONT_SIZE14,
        fontFamily: fontFamily.robotoMedium,
        paddingVertical: width * 0.05,
        textAlign: "center",
      },
    });
  
    export default formStyles;