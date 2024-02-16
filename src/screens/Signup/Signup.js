import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import { BASE_URL } from "../../utils/constant";
import { CheckValidData } from "../../utils/validate";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/userSlice";
import signupStyles from './SignupStyles';
import formStyles from '../../utils/formStyles'

const SignupScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    emailId:'',
    password:'',
    firstName:'',
    lastName:''
  });

   const [errorMessage, setErrorMessage] = useState(null);
 
  const pressSignup = async() => {
    const message = CheckValidData(formData.emailId, formData.password, formData.firstName);
    setErrorMessage(message);
    if (message) return;

    let _data = {
      name:formData.firstName,
      email:formData.emailId,
      password:formData.password
    }
    try{
       await axios.post(`${BASE_URL}/api/users`, _data).then((response) => {
        dispatch(addUser(response.data))
        navigation.navigate("Home");
      });
    }catch (error){
      setErrorMessage(error.message)
    }
  }

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const handleDataChange = (value, key) =>{
    const data = formData;
    data[key] = value;
    setFormData({
      ...data
    })
  }

  return (
    <View style={signupStyles.mainContainer}>
      <KeyboardAvoidingView
        style={signupStyles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={signupStyles.imgContainer}>
            <Image
              style={formStyles.tinyLogo}
              source={require("../../../assets/images/logo.png")}
            />
          </View>
          <Text style={formStyles.header}>Signup</Text>
           <Text style={formStyles.error}>{errorMessage}</Text>
          <View style={formStyles.textBox}>
            <Text style={formStyles.label}>First Name</Text>
            <TextInput
              placeholder="First name"
              value={formData.firstName}
              onChangeText={(value) => handleDataChange(value, "firstName")}
              style={formStyles.textInput}
            />
          </View>
          <View style={formStyles.textBox}>
            <Text style={formStyles.label}>Last name</Text>
            <TextInput
              placeholder="Last name"
              value={formData.lastName}
              onChangeText={(value) => handleDataChange(value, "lastName")}
              style={formStyles.textInput}
            />
          </View>
          <View style={formStyles.textBox}>
            <Text style={formStyles.label}>Email</Text>
            <TextInput
              placeholder="Enter email"
              value={formData.emailId}
              onChangeText={(value) => handleDataChange(value,"emailId")}
              style={formStyles.textInput}
            />
          </View>
          <View style={formStyles.textBox}>
            <Text style={formStyles.label}>Password</Text>
            <TextInput
              placeholder="Enter password"
              value={formData.password}
              onChangeText={(value) => handleDataChange(value,"password")}
              style={formStyles.textInput}
            />
          </View>
          
          <TouchableOpacity onPress={pressSignup} style={formStyles.button}>
            <Text style={formStyles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={formStyles.linkText}>Already have account? Signin</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};


export default SignupScreen;
