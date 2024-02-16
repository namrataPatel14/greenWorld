import * as React from 'react';
import { View, Text, Image, TextInput} from 'react-native';

import homeStyles from './homeStyles';
import { Ionicons } from "@expo/vector-icons";


const carouselItems = [
   {
     image:
       "https://images.unsplash.com/photo-1678436748951-ef6d381e7a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D",
     ar: 0.7,
   },
   {
     image:
       "https://images.unsplash.com/photo-1680813977591-5518e78445a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     ar: 0.67,
   },
   {
     image:
       "https://images.unsplash.com/photo-1679508056887-5c76269dad54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     ar: 0.8,
   },
   {
     image:
       "https://images.unsplash.com/photo-1681243303374-72d01f749dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDczfGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D",
     ar: 0.68,
   },
   {
     image:
       "https://images.unsplash.com/photo-1675185741953-18b60234cb79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     ar: 0.67,
   },
   {
     image:
       "https://images.unsplash.com/photo-1685725083464-26cab8f2da1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     ar: 0.67,
   },
 ];

const HomeScreen = () => {
   return(
    <View style={homeStyles.container}>
        <View style={homeStyles.header}>
           <View style={homeStyles.leftHeader}>
              <View style={homeStyles.imgContainer}>
                <Image
                  style={homeStyles.userImg}
                  source={require("../../../assets/images/profile.jpeg")}
                  resizeMode='cover'
                />
              </View>
              <View style={homeStyles.infoContainer}>
                 <Text style={homeStyles.userName}>Namrata</Text>
                 <View style={homeStyles.location}>
                    <Ionicons name={'location-outline'} size={15} color={"#8d8c8c"} />
                    
                    <Text style={homeStyles.locationText}>Canada</Text>
                 </View>
              </View>
           </View>
           <View style={homeStyles.rightHeader}>
            <View style={homeStyles.iconContainer}>
               <Ionicons name={"heart-outline"} size={22} color={"#8d8c8c"} />
            </View>
            <View style={homeStyles.iconContainer}>
               <Ionicons name={"cart-outline"} size={22} color={"#8d8c8c"} />
            </View>
           </View>
        </View>
        <View style={homeStyles.searchBar}>
           <Ionicons name={"search-outline"} size={22} color={"#8d8c8c"} />
           <TextInput
              placeholder="Search"
              style={homeStyles.searchInput}
            />
        </View>
        <View style={homeStyles.slider}> 
           <Text style={homeStyles.heading}>Special Offers</Text>
     
        </View>
    </View>
   )
}
export default HomeScreen;