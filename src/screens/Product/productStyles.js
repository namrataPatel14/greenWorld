import { StyleSheet } from "react-native";
import { width, height, appStyles } from "../../utils/constant";

let fonts = appStyles.fonts;
let fontFamily = appStyles.fontFamily;
let color = appStyles.color;

const productStyles = StyleSheet.create({
  imgHeader: {
    paddingVertical: width * 0.05,
  },
  productImg: {
    width: "100%",
    height: width * 0.9,
  },
  productInfoBody: {
    paddingHorizontal: width * 0.05,
    paddingBottom:width *0.01
  },
  productName: {
    fontFamily: fontFamily.ralewayMedium,
    color: color.HEADING,
    fontSize: fonts.FONT_SIZE16,
  },
  productType: {
    fontSize:fonts.FONT_SIZE16,
    color:color.GREY,
    
  },
  productPrice: {
    fontFamily:fontFamily.robotoBold,
    fontSize:fonts.FONT_SIZE16,
    color:color.HEADING,
    marginVertical:width*0.02
  },
  productDetail: {
    paddingVertical:width*0.02,
    fontSize:fonts.FONT_SIZE14,
    color:color.DARK_GREY1,
    lineHeight:width*0.05,
    opacity:0.7
  },
  buttonFooter:{
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingBottom:width*0.13,
    paddingTop:width*0.05,
    borderTopWidth:1,
    borderTopColor:color.LIGHT_GREY,
    paddingHorizontal:width*0.02
  },
  buttonContainer:{
    flex:1,
  },
  footerLink:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    justifyContent:'center',
    paddingVertical:width*0.03,
    marginHorizontal:width*0.015,
    borderRadius: width * 0.07,
    borderColor:color.GREY
  },
  footerLinkText:{
    fontSize:fonts.FONT_SIZE12,
    color:color.HEADING,
    marginLeft:width*0.012
  },
  addToCart:{
    backgroundColor:color.GREEN,
    borderColor:color.GREEN
  },
  addToCarttext:{
    color:color.WHITE
  },
  sizeContainer:{
    display:'flex',
    flexDirection:'row',
    
  },
  heading:{
    fontFamily:fontFamily.robotoMedium,
    fontSize:fonts.FONT_SIZE16,
    color:color.HEADING,
    marginVertical:width*0.02
  },
  sizeButton:{
    height:width*0.12,
    width:width*0.12,
    borderWidth:1,
    borderRadius:width*0.1,
    borderColor:color.GREY,
    marginRight:width*0.03,
    justifyContent:'center',
    alignItems:'center'
  },
  sizeText:{
    fontFamily:fontFamily.robotoMedium,
    fontSize:fonts.FONT_SIZE12,
  }
});

export default productStyles;
