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
import productStyles from "./productStyles";
import { useEffect, useState } from "react";
import { BASE_URL, width } from "../../utils/constant";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const ProductScreen = () => {
  const route = useRoute();
  const [productInfo, setProductInfo] = useState("");
  const [productAdd, setProductAdded] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getProductInfo = async (productID) => {
    try {
      await axios
        .get(`${BASE_URL}/api/products/${productID}`)
        .then((response) => {
          setProductInfo(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const addItemToCart = () => {
    dispatch(addToCart(productInfo));
    setProductAdded(true);
  };
  useEffect(() => {
    getProductInfo(route.params);
  }, []);

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.topContainer}>
        <View style={homeStyles.header}>
          <View style={homeStyles.leftHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name={"chevron-back-outline"}
                size={20}
                color={"#263238"}
              />
            </TouchableOpacity>
            <View style={homeStyles.infoContainer}>
              <Text style={homeStyles.userName}>{productInfo.name}</Text>
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
              uri: productInfo.image,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={productStyles.productInfoBody}>
          <Text style={productStyles.productName}>
            {productInfo.name}{" "}
            <Text style={productStyles.productType}>
              in {productInfo.category}
            </Text>
          </Text>
          <Text style={productStyles.productPrice}>
            ${productInfo.price} CAD
          </Text>
          <Text style={productStyles.productDetail}>
            {productInfo.description}
          </Text>
          <Text style={productStyles.heading}>Size</Text>
          <View style={productStyles.sizeContainer}>
            <TouchableOpacity style={productStyles.sizeButton}>
              <Text style={productStyles.sizeText}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={productStyles.sizeButton}>
              <Text style={productStyles.sizeText}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={productStyles.sizeButton}>
              <Text style={productStyles.sizeText}>L</Text>
            </TouchableOpacity>
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
          <TouchableOpacity
            style={[productStyles.footerLink, productStyles.addToCart]}
            onPress={
              productAdd ? () => navigation.navigate("Cart") : addItemToCart
            }
          >
            <Ionicons name={"cart-outline"} size={18} color={"#fff"} />
            <Text
              style={[
                productStyles.footerLinkText,
                productStyles.addToCarttext,
              ]}
            >
              {productAdd ? "Go to Cart" : "Add To Cart"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProductScreen;
