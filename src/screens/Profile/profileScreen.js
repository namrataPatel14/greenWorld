import * as React from 'react';
import { Alert, Text, View,TouchableOpacity } from 'react-native';
import { BASE_URL } from '../../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../slices/userSlice';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
 
    const logout = async(e) =>{
     e.preventDefault();
     try {
         await axios.post(`${BASE_URL}/api/users/logout`).then((response)=>{
           dispatch(removeUser());
         navigation.navigate('Login')
           
         })
       } catch (error) {
         console.log(error);
       }
     console.log("logout")
    }
 
   return(
    <View style={{borderWidth:1, height:'100%' , width:'100%'}}>
        <Text style={{fontSize:30}}>Home</Text>
         <TouchableOpacity style={{margin:50}} onPress={logout}>
            <Text>Logout</Text>
         </TouchableOpacity>
    </View>
   )
}
export default ProfileScreen;