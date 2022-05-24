import react, {useState, useEffect} from 'react';
import { StyleSheet,
  Text, 
  View, 
  TouchableOpacity,
  } from 'react-native';
import { Button } from 'react-native-web';


import GoalInput from "./Components/Item/GoalInput";



export default function App() {
  
  const [answer, setAnswer] = useState('');
  const [number, setNumber] = useState('');
  const [guess, setGuess] = useState('');
  const [flag, setFlag] = useState(true);
  const [win, setwin] = useState(true);
  

  useEffect(() => {
    return () => {
      if(flag){
        setNumber(Math.floor(Math.random() * 99).toString());
        setFlag(false)
      }
      
    };
  })

  const addRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 99).toString());
    setGuess('')
    setAnswer('');
    
  };
  const setAnswerHandler = temp => {
    setAnswer(temp);
    if(win)
      setGuess(guess + ' ' + temp);
  };

  const reset = () =>{
    setNumber(Math.floor(Math.random() * 99).toString());
    setAnswer('')

  }

  

  const result = answer =>{
    if(answer === ''){
      return "Lower or Higher";
    }
    else if(answer < number)  {
      return "Higher"
    }
    else if(answer > number){
      return "Lower"
    }
    else{
      return "Congrats!"
    }
  };

  return (
    <View style={styles.back}>
      
      <View style={styles.title}>
        <Text style={styles.titleStyle}>Enter your guess between 0 and 99:</Text>
        
        <GoalInput  onAddAnswer={setAnswerHandler} />
      </View>
      <View style={styles.PSquare}>
      </View>
      <View style={styles.center}>
        <Text>Your Guesses: {guess}</Text>
        <Text style={styles.bold} >{result(answer)}</Text>
      </View>
      <View style={styles.bottomCenter}>
        <Button title="Reset" onPress={addRandomNumber}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8EAED'
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    margin: 15
  },
  titleStyle: {
    fontSize: 15,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  square:{
    backgroundColor: "white",
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  PSquare:{
    left: 0,
    flexDirection: 'row',
  },
  bottomCenter: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
    backgroundColor: '#E8EAED',
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  bold: {
    fontSize: 30,
    fontStyle: 'bold'
  }
});
