import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useSelector} from "react-redux"
import homeStyles from "./homeStyles";
import { Ionicons } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { BASE_URL, width } from "../../utils/constant";
import axios from "axios";

const data = [
  {
    title: "On All Outdoor Plants",
    body: "10% OFF",
    imgUrl: require("../../../assets/images/img3.jpg"),
  },
  {
    title: "On All Spring Plants",
    body: "20% OFF",
    imgUrl: require("../../../assets/images/img2.jpg"),
  },
  {
    title: "On All Indoor Plants",
    body: "30% OFF",
    imgUrl: require("../../../assets/images/img1.png"),
  },
];

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState("");
  const navigation = useNavigation();
  const isCarousel = useRef(null);
  const {userInfo} =  useSelector(state => state.user)
  console.log(userInfo.name , "userInfo@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  const getAllProducts = async () => {
    try {
      await axios.get(`${BASE_URL}/api/products`).then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
 const navigateToCart = () =>{
  navigation.navigate("Cart")
 }
 const navigateToProduct = () =>{
  navigation.navigate("Product")
 }
  const CarouselCardItem = ({ item, index }) => {
    return (
      <View key={index} style={homeStyles.CarContainer}>
        <View style={homeStyles.imgCarContainer}>
          <Image
            source={item.imgUrl}
            style={homeStyles.imgCarousel}
            resizeMode="cover"
          />
        </View>
        <View style={homeStyles.carInfo}>
          <Text style={homeStyles.titleCar}>{item.title}</Text>
          <Text style={homeStyles.bodyCar}>{item.body}</Text>
          <TouchableOpacity style={homeStyles.linkButton}>
            <Text style={homeStyles.linkText}>Explore More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItem = (item) => {
    console.log(item.item, "renderItem *****");
    return (
      <View style={homeStyles.productCard}>
        <View>
          <TouchableOpacity onPress={navigateToProduct}>
            <Image
              style={homeStyles.productImg}
              source={{
                uri: item.item.image,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View
          style={homeStyles.productContainer}
        >
          <View style={homeStyles.productInfo}>
            <Text style={homeStyles.productName} numberOfLines={1}>{item.item.name}</Text>
            <Text style={homeStyles.productCat}>{item.item.category}</Text>
            <Text style={homeStyles.productPrice}>${item.item.price}</Text>
          </View>
          <View style={homeStyles.heartIcon}>
            {/* <Ionicons name={"heart-outline"} size={22} color={"#ABABA7"} /> */}
            <Ionicons name={"heart"} size={22} color={"red"} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.topContainer}>
        <View style={homeStyles.header}>
          <View style={homeStyles.leftHeader}>
            <View style={homeStyles.imgContainer}>
              <Image
                style={homeStyles.userImg}
                source={require("../../../assets/images/profile.jpeg")}
                resizeMode="cover"
              />
            </View>
            <View style={homeStyles.infoContainer}>
              <Text style={homeStyles.userName}>Hello,{userInfo.name}</Text>
              <View style={homeStyles.location}>
                <Text style={homeStyles.locationText}>
                  Lets find your favourite plants.
                </Text>
              </View>
            </View>
          </View>
          <View style={homeStyles.rightHeader}>
            <TouchableOpacity style={homeStyles.iconContainer} onPress={navigateToCart}>
              <Ionicons name={"cart-outline"} size={20} color={"#263238"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={homeStyles.searchBar}>
          <Ionicons name={"search-outline"} size={20} color={"#CCC"} />
          <TextInput
            placeholder="Search..."
            style={homeStyles.searchInput}
            value="Search value"
          />
        </View>
      </View>

      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
      >
        <View style={homeStyles.slider}>
          <View>
            <Carousel
              ref={isCarousel}
              data={data}
              layout={"default"}
              renderItem={CarouselCardItem}
              sliderWidth={width}
              itemWidth={width}
              onSnapToItem={(index) => setIndex(index)}
              useScrollView={true}
            />
            <View style={homeStyles.pagination}>
              <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  backgroundColor: "#2c5123",
                  marginTop: 0,
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={homeStyles.tabContainer}>
            <TouchableOpacity
              style={[homeStyles.tabTitle, homeStyles.tabTitleActive]}
            >
              <Text style={homeStyles.catTitleActive}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[homeStyles.tabTitle, homeStyles.tabTitleInActive]}
            >
              <Text style={homeStyles.catTitleInActive}>Indoor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[homeStyles.tabTitle, homeStyles.tabTitleInActive]}
            >
              <Text style={homeStyles.catTitleInActive}>Outdoor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[homeStyles.tabTitle, homeStyles.tabTitleInActive]}
            >
              <Text style={homeStyles.catTitleInActive}>Garden</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={products}
          renderItem={renderItem}
          scrollEnabled={false}
          numColumns={2}
          key={2}
          columnWrapperStyle={{ gap: 7 }}
          style={homeStyles.productList}
        />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
