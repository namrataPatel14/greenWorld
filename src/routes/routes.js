import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login/Login";
import SignupScreen from "../screens/Signup/Signup";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/homeScreen";
import ProfileScreen from "../screens/Profile/profileScreen";
import CartScreen from "../screens/Cart/cartScreen";
import { Ionicons } from "@expo/vector-icons";
import productScreen from "../screens/Product/productScreen";
import ProductScreen from "../screens/Product/productScreen";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const TabNavigator = () =>{
  return (
    <Tab.Navigator screenOptions={({route}) => ({
     tabBarShowLabel:false,
     headerShown: false,
      tabBarIcon: ({focused, color, size}) =>{
        let iconName;
        if(route.name == "Home"){
          iconName = focused ? 'home' : 'home-outline';
        }else if(route.name == "Cart"){
          iconName = focused ? 'cart' : 'cart-outline';
        } else if(route.name == "Profile"){
          iconName = focused ? 'person' : 'person-outline';
        }
        else if(route.name == "Favourite"){
          iconName = focused ? 'heart' : 'heart-outline';
        }
        
        return <Ionicons name={iconName} size={22} color={color} />;
      },
      tabBarActiveTintColor: '#2c5123',
      tabBarInactiveTintColor: '#ABABA7',
    })}>
      
      <Tab.Screen name="Home" component={HomeScreen}/> 
      <Tab.Screen name="Favourite" component={CartScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
const RouteScreen = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <stack.Screen
            name="Signup"
            component={SignupScreen}
          />
          <stack.Screen
            name="Product"
            component={ProductScreen}
          />
          <stack.Screen
            name="TabNavigator"
            component={TabNavigator}
          />
        </stack.Navigator>
    </NavigationContainer>
  );
};
export default RouteScreen;
