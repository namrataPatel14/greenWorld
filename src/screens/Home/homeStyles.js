import { StyleSheet } from "react-native";
import { width, height , appStyles} from "../../utils/constant";

let fonts = appStyles.fonts;
  let fontFamily = appStyles.fontFamily;
  let color = appStyles.color;

const homeStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.18,
    height:'100%'
  },
  imgContainer:{
    overflow:'hidden',
    borderRadius:'100%',
    height:width * 0.11,
    width:width * 0.11,
  },
  infoContainer:{
    marginLeft:width * 0.02
  },
  userImg:{
    width:'100%',
    height:'100%'
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
  },
  leftHeader:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    
  },
  rightHeader:{
    display:'flex',
    flexDirection:'row'
  },
  location:{
    display:'flex',
    flexDirection:'row',
    paddingTop:width * 0.015
  },
  userName:{
    fontSize:fonts.FONT_SIZE16,
    fontFamily:fontFamily.ralewayMedium,
    color:color.BLACK,
  },
  locationText:{
    marginLeft:width* 0.005,
    color:color.DARK_GREY1,
    fontSize:fonts.FONT_SIZE14,
    fontFamily:fontFamily.robotoRegular
  },
  iconContainer:{
    height:width * 0.11,
    width:width*0.11,
    borderRadius:'100%',
    backgroundColor:color.LIGHT_GREY,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:width* 0.03
  },
  searchBar:{
    width:'100%',
    marginVertical:width*0.08,
    paddingVertical:width*0.04,
    paddingHorizontal:width*0.05,
    backgroundColor:color.LIGHT_GREY,
    borderRadius:width*0.1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  searchInput:{
    marginLeft:width*0.01
  },
  heading:{
    fontSize:fonts.FONT_SIZE14,
    fontFamily:fontFamily.ralewayMedium,
    color:color.HEADING,
  }
});

export default homeStyles;
