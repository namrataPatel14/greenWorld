import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import homeStyles from "../Home/homeStyles";
import productStyles from "./productStyles"
const ProductScreen = () => {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.topContainer}>
        <View style={homeStyles.header}>
          <View style={homeStyles.leftHeader}>
            <Ionicons
              name={"chevron-back-outline"}
              size={20}
              color={"#263238"}
            />
            <View style={homeStyles.infoContainer}>
              <Text style={homeStyles.userName}>Money plant</Text>
            </View>
          </View>
          <View style={homeStyles.rightHeader}>
            <TouchableOpacity style={homeStyles.iconContainer}>
              <Ionicons name={"cart-outline"} size={20} color={"#263238"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={productStyles.imgHeader}>
        <Image
              style={productStyles.productImg}
              source={{
                uri: "https://i.postimg.cc/CxCLjrQQ/moneyplant.webp",
              }}
              resizeMode="cover"
            />
        </View>
        <View style={productStyles.productInfoBody}>
            <Text style={productStyles.productName}>Money Plant <Text style={productStyles.productType}>in Indoor plant</Text></Text>
            <Text style={productStyles.productPrice}>$30 CAD</Text>
            <Text style={productStyles.productDetail}>These peculiar looking green plants have caught the imagination of indoor plant lovers the world around. No plant collection is complete without one.</Text>
            <Text style={productStyles.heading}>Size</Text>
            <View style={productStyles.sizeContainer}>
                <TouchableOpacity style={productStyles.sizeButton}><Text style={productStyles.sizeText}>S</Text></TouchableOpacity>
                <TouchableOpacity style={productStyles.sizeButton}><Text style={productStyles.sizeText}>M</Text></TouchableOpacity>
                <TouchableOpacity style={productStyles.sizeButton}><Text style={productStyles.sizeText}>L</Text></TouchableOpacity>
            </View>
        </View>
        
      </ScrollView>
      <View style={productStyles.buttonFooter}>
        <View style={productStyles.buttonContainer}>
            
            <TouchableOpacity style={productStyles.footerLink}>
                <Ionicons name={"heart-outline"} size={18} color={"#ABABA7"} /> 
                <Text style={productStyles.footerLinkText}>Wishlist</Text>
            </TouchableOpacity>
        </View>
        <View style={productStyles.buttonContainer}>
            <TouchableOpacity style={[productStyles.footerLink, productStyles.addToCart]}>
                <Ionicons name={"cart-outline"} size={18} color={"#fff"} />
                <Text style={[productStyles.footerLinkText,productStyles.addToCarttext]}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProductScreen;
