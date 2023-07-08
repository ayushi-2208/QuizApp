import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';

const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


const Quiz = ({navigation}) => {
  const[questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false)

    const getQuiz = async()=>{
      setLoading(true)
      const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.results[0])
      setQuestions(data.results);
      setOptions(generateOptionsAndShuffle(data.results[0])) 
      setLoading(false)
    };
    useEffect(()=>{
       getQuiz()
    },[]);

    const handleNextPress=()=>{
      setQues(ques+1);
      setOptions(generateOptionsAndShuffle(questions[ques+1])) 
    }
    const generateOptionsAndShuffle=(_question)=>{
      const options = [..._question.incorrect_answers]
      options.push(..._question.correct_answer)
      console.log(options , "hello appear")
      shuffleArray(options)
      // console.log(options ,"after")
      return options;
    }

    const handleSelectedOption = (_option)=>{
      if(_option===questions[ques].correct_answer){
        setScore(score+10);
      }
      if(ques!==9){
        setQues(ques+1);
      setOptions(generateOptionsAndShuffle(questions[ques+1]))
      }
      if(ques === 9){
        handleShowResults();
      }
       
     console.log(_option===questions[ques].correct_answer)
    }

    const handleShowResults=()=>{
      navigation.navigate('Result',{
          score: score
      })
    }
    const animationUrl = 'https://assets8.lottiefiles.com/packages/lf20_sjcbakkb.json';

  return (
    <View style={styles.container}>
      {loading ?
       <View style={{flex:1}}>
        <LottieView
        source={{ uri: animationUrl }}
        autoPlay
        loop
      />
       </View> : questions && ( 
        <View style = {styles.parent}>
      <View style={styles.top}>
      <Text style={styles.question}> Q. {decodeURIComponent(questions[ques].question) }</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
            <Text style={styles.option}>{options[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
            <Text style={styles.option}>{encodeURI(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
            <Text style={styles.option}>{encodeURI(options[3])}</Text>
        </TouchableOpacity>
        
      </View>
      <View style = {styles.bottom}>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity> */}
        {
          ques!==9 && 
           <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        }
         {
          ques===9 && 
           <TouchableOpacity style={styles.button} onPress={handleShowResults}>
          <Text style={styles.buttonText}>SHOW RESULTS</Text>
        </TouchableOpacity>
        }
       
       
      </View>
      </View>
      )}
    </View>
  );
};



export default Quiz;

const styles = StyleSheet.create({
  container:{
    paddingTop:10,
      paddingHorizontal:20,
      height:'100%',
      backgroundColor:'white'
  },
  top:{
    marginVertical: 16,
  },
  options:{
    marginVertical:16,
    flex:1,
  },
  bottom:{
    marginBottom:9,
    paddingVertical:16,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  button:{
    
    backgroundColor:'#560BAD',
    padding:12,
    paddingHorizontal:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:30,
  },
  buttonText:{
    fontSize:18,
    fontWeight:'600',
    color:'white'
  },
  question:{
    fontSize:28,
    color:'black',
  },
  option:{
    fontSize:18,
    color:'white',
    fontWeight:'500'
  },
  optionButton:{
    paddingVertical:12,
    marginVertical:6,
    backgroundColor:'#5E60CE',
    paddingHorizontal:12,
    borderRadius:12,
  },
  parent:{
    height:'100%'
  }
})