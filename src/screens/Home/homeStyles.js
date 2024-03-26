import { StyleSheet } from "react-native";
import { width, height, appStyles } from "../../utils/constant";

let fonts = appStyles.fonts;
let fontFamily = appStyles.fontFamily;
let color = appStyles.color;

const homeStyles = StyleSheet.create({
  container: {
    width: "100%",
    // paddingHorizontal: width * 0.05,
    paddingTop: width * 0.18,
    height: "100%",
    backgroundColor: color.WHITE,
  },
  topContainer:{
    paddingHorizontal: width * 0.05
  },
  imgContainer: {
    overflow: "hidden",
    borderRadius: "100%",
    height: width * 0.11,
    width: width * 0.11,
  },
  infoContainer: {
    marginLeft: width * 0.02,
  },
  userImg: {
    width: "100%",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
   
  },
  leftHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rightHeader: {
    display: "flex",
    flexDirection: "row",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    paddingTop: width * 0.015,
  },
  userName: {
    fontSize: fonts.FONT_SIZE16,
    fontFamily: fontFamily.ralewayMedium,
    color: color.BLACK,
  },
  locationText: {
    marginLeft: width * 0.005,
    color: color.GREY,
    fontSize: fonts.FONT_SIZE12,
    fontFamily: fontFamily.robotoRegular,
  },
  iconContainer: {
    // height: width * 0.1,
    // width: width * 0.1,
    borderRadius: "100%",
    // backgroundColor:color.LIGHT_GREY,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft:width* 0.03
  },
  searchBar: {
    width: "100%",
    marginTop: width * 0.07,
    marginBottom: width * 0.04,
    paddingVertical: width * 0.032,
    paddingHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: color.GREY,
    borderRadius: width * 0.08,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
  },
  searchInput: {
    marginLeft: width * 0.01,
  },
  heading: {
    fontSize: fonts.FONT_SIZE14,
    fontFamily: fontFamily.ralewayMedium,
    color: color.HEADING,
    marginBottom: width * 0.05,
  },
  imgCarContainer: {
    width: "100%",
    height: width * 0.45,
    
  },
  imgCarousel: {
    width: "100%",
    height: "100%",
    
  },
  CarContainer: {
    position: "relative",
    
  },
  carInfo: {
    position: "absolute",
    top: 50,
    right: "21%"
  },
  titleCar: {
    textAlign: "center",
    fontSize: fonts.FONT_SIZE14,
    color: color.HEADING,
    fontFamily: fontFamily.ralewayMedium,
  },
  bodyCar: {
    textAlign: "center",
    fontFamily: fontFamily.robotoBold,
    fontSize: fonts.FONT_SIZE16,
    color: color.HEADING,
    marginTop: width * 0.02,
    marginBottom: width * 0.02,
  },
  pagination: {
    marginTop: -15,
  },
  linkText: {
    textAlign: "center",
    color: color.WHITE,
    fontFamily: fontFamily.ralewayMedium,
    fontSize: fonts.FONT_SIZE12,
  },
  linkButton:{
    backgroundColor:color.GREEN,
    paddingVertical: width * 0.032,
    borderRadius: width * 0.08,
   paddingHorizontal:width * 0.035,
    width:width * 0.35,
   alignSelf:'center'
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.03,
    backgroundColor:color.WHITE,
    paddingBottom:width * 0.03
  },
  tabTitle: {
    textAlign: "center",
    paddingVertical: width * 0.025,
    paddingHorizontal: width * 0.045,
    borderWidth: 1,
    borderRadius: width * 0.08,
    marginHorizontal: width * 0.01,
  },
  tabTitleInActive:{
    borderColor: color.GREY,
    backgroundColor:color.WHITE
  },
  tabTitleActive:{
    borderColor: color.GREEN,
    backgroundColor:color.GREEN
  },
  catTitleActive:{
    color: color.WHITE_ONE,
  },
  catTitleInActive:{
    color: color.GREY,
  },
  catTitle: {
    fontSize: fonts.FONT_SIZE14,
    fontFamily: fontFamily.ralewayMedium,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: color.GREEN,
    marginTop: 0,
  },

  productImg:{
    height: width * 0.5, 
    width: "100%",
    borderRadius: width * 0.02
  },
  productCard:{
    display: "flex", 
    flex: 1, 
    marginVertical: width * 0.02,
    padding:width*0.005,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.1,  
    shadowRadius: 3, 
  },
  productContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical:width*0.02,
  },
  productName:{
    fontFamily:fontFamily.robotoMedium,
    color:color.HEADING,
    fontSize:fonts.FONT_SIZE14
  },
  productInfo:{
    marginRight:width*0.01,
  },
  productCat:{
    fontSize:fonts.FONT_SIZE12,
    color:color.GREY,
    marginVertical:width*0.01
  },
  productPrice:{
    fontFamily:fontFamily.robotoBold,
    fontSize:fonts.FONT_SIZE14,
    color:color.HEADING,
  },
  heartIcon:{
    marginTop:width*0.002
  },
  productList:{
    padding:width*0.015
  }
});

export default homeStyles;
