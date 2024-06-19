import { StyleSheet } from "react-native";
import { width, height, appStyles } from "../../utils/constant";

let fonts = appStyles.fonts;
let fontFamily = appStyles.fontFamily;
let color = appStyles.color;

const cartStyles = StyleSheet.create({
  mainContainer: {
    height: height - height * 0.06,
  },
  container: {
    width: "100%",
    paddingHorizontal: width * 0.09,
    paddingVertical: width * 0.05,
    marginTop: width * 0.2,
    marginBottom: width * 0.05,
  },
  cartItemContainer: {
    backgroundColor: 'white',
    paddingHorizontal: width * 0.005,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    paddingVertical:width*0.04,
    borderColor:color.LIGHT_GREY
  },
  cartContent:{
    padding: width*0.05
  },
  cartItem:{
    display:'flex',
    flexDirection:'row',
    flex:3
  },
  imgContainer:{
    marginRight:width*0.03,
    height:width*0.2,
    width:width*0.2
  },
  imgBox:{
     height:'100%',
     width:'100%',
     borderRadius:width*0.02
  },
  productName:{
     fontSize:fonts.FONT_SIZE14,
     fontFamily:fontFamily.robotoMedium,
     color:color.HEADING,
  },
  productSize:{
    fontSize:fonts.FONT_SIZE12,
    fontFamily:fontFamily.robotoMedium,
    color:color.GREY,
    paddingVertical:width*0.01
 },
 productPrice:{
    fontSize:fonts.FONT_SIZE14,
    fontFamily:fontFamily.robotoMedium,
    color:color.HEADING,
    paddingVertical:width*0.01
 },
 quantity:{
    display:'flex',
    flexDirection:'row'
 },
 cartEdit:{
    display:"flex",
    justifyContent:'space-between',
    alignItems:'flex-end'
 },
 qtyInput:{
    paddingHorizontal:width* 0.05,
 },
 editBox:{
    padding:width* 0.015,
    borderWidth:1,
    borderColor:color.GREY
 }
});

export default cartStyles;
