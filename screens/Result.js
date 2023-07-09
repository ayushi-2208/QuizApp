import React from 'react';
import { Text, View,Image,StyleSheet, TouchableOpacity } from 'react-native';
import Title from '../component/Title';


const Result = ({navigation,route}) => {
  const {score} = route.params
 
  const resultBanner = score>=40 ? "https://img.freepik.com/free-vector/people-celebrating-goal-achievement_23-2148823078.jpg?w=996&t=st=1688712358~exp=1688712958~hmac=75b337c9cbc00ce3650b21df77adda002407c3f776799e54b989bcca3075fd63" : "https://img.freepik.com/free-vector/loser-failure-success-winning-businessmen-composition-with-character-discouraged-man-with-down-arrow_1284-63218.jpg?w=740&t=st=1688713468~exp=1688714068~hmac=304bfaff08136494a82df22892ce0bee98580b3c5bf1f998c6024c0bca3a705d"
  return (
    <View style={styles.container}>
<Title titleText = 'RESULTS'/>
<Text style={styles.scoreValue}>{score}</Text>
<View style={styles.bannerContainer}>
   <Image source={{uri: resultBanner}}
   style={styles.banner}
   resizeMode="contain"
   />
</View>
<TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.button}>
   <Text style={styles.buttonText}>GO TO HOME</Text>
</TouchableOpacity>
</View>

  );
};


export default Result;

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
  color:'white',
},
scoreValue:{
  fontSize:24,
  fontWeight:'800',
  alignSelf:'center'
}
})