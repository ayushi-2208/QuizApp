import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../component/Title';


const Home = ({navigation}) => {
 

  return (
    <View style={styles.container}>
     <Title titleText = 'QUIZZLER'/>
     
     <View style={styles.bannerContainer}>
        <Image source={{uri:'https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg?w=740&t=st=1688568431~exp=1688569031~hmac=21e666d33812bd6793c8cfa25e3e5cdba52c86cb6a5ed4e85ca7df4f05a63baa'}}
        style={styles.banner}
        resizeMode="contain"
        />
     </View>
     <TouchableOpacity onPress={()=> navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
     </TouchableOpacity>
    </View>
  );
};



export default Home;

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    container:{
      paddingTop:10,
      paddingHorizontal:20,
      height:'100%',
      backgroundColor:'white'
    },
    button:{
      width:'100%',
      backgroundColor:'#560BAD',
      padding:16,
      borderRadius:16,
      alignItems:'center',
      marginBottom:30,
    },
    buttonText:{
      fontSize:24,
      fontWeight:'600',
      color:'white'
    }
})