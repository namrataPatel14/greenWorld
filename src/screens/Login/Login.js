import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from "react-native";

import {  useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../utils/constant";
import { useNavigation } from "@react-navigation/native";
import formStyles from '../../utils/formStyles'
import axios from "axios";
import { addUser } from "../../slices/userSlice";
import loginStyles from "./LoginStyles";



const LoginScreen =  () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const [email, setEmailID] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const {userInfo} =  useSelector(state => state.user)
  console.log(userInfo)
  useEffect (()=>{
      if(userInfo){
        navigation.navigate('TabNavigator', { screen: 'Home' });
      }
  },[userInfo])

  const pressLogin = async() => {
    let _data = {
      email:email,
      password:password
    }
    try {
      await axios.post(`${BASE_URL}/api/users/auth`, _data).then((response)=>{
        console.log(response.data, "response.data")
        dispatch(addUser(response.data));
        navigation.navigate('TabNavigator', { screen: 'Home' });
      })
    } catch (error) {
      setErrorMessage(error?.response?.data?.message || error)
    }
   
  };

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={loginStyles.mainContainer}>
      <KeyboardAvoidingView
        style={loginStyles.container}
        behavior={Platform.OS === "ios" ? "position" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={loginStyles.imgContainer}>
            <Image
              style={formStyles.tinyLogo}
              source={require("../../../assets/images/logo.png")}
            />
          </View>
          <Text style={formStyles.header}>Login</Text>
          <Text style={formStyles.error}>{errorMessage}</Text>
          <View style={formStyles.textBox}>
            <Text style={formStyles.label}>Email</Text>
            <TextInput
              placeholder="Enter email"
              value={email}
              onChangeText={(email) => setEmailID(email)}
              style={formStyles.textInput}
            />
          </View>
          <View style={formStyles.textBox}>
            <Text style={formStyles.label}>Password</Text>
            <TextInput
              placeholder="Enter password"
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={formStyles.textInput}
            />
          </View>
          <TouchableOpacity onPress={pressLogin} style={formStyles.button}>
            <Text style={formStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToSignup}>
            <Text style={formStyles.linkText}>Create account</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};


export default LoginScreen;
