import {
    PixelRatio,
    Dimensions
  } from "react-native";
const fontScale = PixelRatio.getFontScale();
export const { width, height } = Dimensions.get('window');
export const appStyles = {
    color:{
        GREEN:"#2d9700",
        WHITE:'#FFF',
        GREY:'#CCC',
        LIGHT_GREY:'#edecec',
        DARK_GREY1:'#8d8c8c',
        DARK_GREY:"#A9A9A9",
        BLACK:'#000',
        HEADING:'#444',
        ERROR:'red'
    },
    fonts:{
      FONT_SIZE28: 28/fontScale,
      FONT_SIZE24: 24/fontScale,
      FONT_SIZE20: 20/fontScale,
      FONT_SIZE18: 18/fontScale,
      FONT_SIZE16: 16/fontScale,
      FONT_SIZE14: 14/fontScale,
      FONT_SIZE12: 12/fontScale,
      FONT_SIZE10: 10/fontScale,
    },
   fontFamily:{
    robotoRegular:'Roboto-Regular',
    robotoMedium:'Roboto-Medium',
    robotoBold:'Roboto-Bold',
    ralewayLight:'Raleway-Light',
    ralewayMedium:'Raleway-Medium',
    ralewayRegular:'Raleway-Regular'
   }
}
export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://192.168.2.20:8080' : " ";
export const USER_URL = 'api/users';

