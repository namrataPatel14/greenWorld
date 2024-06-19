import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import cartStyles from "./cartStyles";
import productStyles from "../Product/productStyles";
import { Ionicons } from "@expo/vector-icons";
import homeStyles from "../Home/homeStyles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigation = useNavigation();
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
              <Text style={homeStyles.userName}>My Cart</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={cartStyles.cartContent}>
          {cartItems.map((item) => (
            <View key={item._id} style={cartStyles.cartItemContainer}>
              <TouchableOpacity style={cartStyles.cartItem}>
                <View style={cartStyles.imgContainer}>
                  <Image
                    style={cartStyles.imgBox}
                    source={{
                      uri: item.image,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View style={cartStyles.productInfoContainer}>
                  <Text style={cartStyles.productName}>{item.name}</Text>
                  <Text style={cartStyles.productSize}>Size: M</Text>
                  <Text style={cartStyles.productPrice}>${item.price}</Text>
                </View>
              </TouchableOpacity>
              <View style={cartStyles.cartEdit}>
                <TouchableOpacity>
                  <Ionicons
                    name={"trash-outline"}
                    size={20}
                    color={"#263238"}
                  />
                </TouchableOpacity>
                <View style={cartStyles.quantity}>
                  <TouchableOpacity style={cartStyles.editBox}>
                    <Ionicons name={"remove"} size={14} color={"#263238"} />
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Search..."
                    style={cartStyles.qtyInput}
                    value="1"
                  />
                  <TouchableOpacity style={cartStyles.editBox}>
                    <Ionicons name={"add"} size={14} color={"#263238"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
          {/* <View style={cartStyles.cartItemContainer}>
            <TouchableOpacity style={cartStyles.cartItem}>
              <View style={cartStyles.imgContainer}>
                <Image
                  style={cartStyles.imgBox}
                  source={{
                    uri: "https://i.postimg.cc/CxCLjrQQ/moneyplant.webp",
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={cartStyles.productInfoContainer}>
                <Text style={cartStyles.productName}>{cartItems.name}</Text>
                <Text style={cartStyles.productSize}>Size: M</Text>
                <Text style={cartStyles.productPrice}>${cartItems.price}</Text>
              </View>
            </TouchableOpacity>
            <View style={cartStyles.cartEdit}>
              <TouchableOpacity>
                <Ionicons name={"trash-outline"} size={20} color={"#263238"} />
              </TouchableOpacity>
              <View style={cartStyles.quantity}>
                <TouchableOpacity style={cartStyles.editBox}>
                  <Ionicons name={"remove"} size={14} color={"#263238"} />
                </TouchableOpacity>
                <TextInput
                  placeholder="Search..."
                  style={cartStyles.qtyInput}
                  value="1"
                />
                <TouchableOpacity style={cartStyles.editBox}>
                  <Ionicons name={"add"} size={14} color={"#263238"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={cartStyles.cartItemContainer}>
            <TouchableOpacity style={cartStyles.cartItem}>
              <View style={cartStyles.imgContainer}>
                <Image
                  style={cartStyles.imgBox}
                  source={{
                    uri: "https://i.postimg.cc/CxCLjrQQ/moneyplant.webp",
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={cartStyles.productInfoContainer}>
                <Text style={cartStyles.productName}>Money Plant</Text>
                <Text style={cartStyles.productSize}>Size: M</Text>
                <Text style={cartStyles.productPrice}>$55</Text>
              </View>
            </TouchableOpacity>
            <View style={cartStyles.cartEdit}>
              <TouchableOpacity>
                <Ionicons name={"trash-outline"} size={20} color={"#263238"} />
              </TouchableOpacity>
              <View style={cartStyles.quantity}>
                <TouchableOpacity style={cartStyles.editBox}>
                  <Ionicons name={"remove"} size={14} color={"#263238"} />
                </TouchableOpacity>
                <TextInput
                  placeholder="Search..."
                  style={cartStyles.qtyInput}
                  value="1"
                />
                <TouchableOpacity style={cartStyles.editBox}>
                  <Ionicons name={"add"} size={14} color={"#263238"} />
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
      <View style={productStyles.buttonFooter}>
        <View style={productStyles.buttonContainer}>
          <TouchableOpacity
            style={[productStyles.footerLink, productStyles.addToCart]}
          >
            <Text
              style={[
                productStyles.footerLinkText,
                productStyles.addToCarttext,
              ]}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartScreen;
