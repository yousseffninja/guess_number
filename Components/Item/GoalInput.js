import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert
    } from 'react-native';
import { Button } from 'react-native-web';
    

const GoalInput = props => {
    const [answer, setAnswer] = useState('');

    const AnswerHandler = answer => {
        setAnswer(answer);
    };

    const showAlert = () =>
    Alert.alert(
        "Error",
        "Answer Empty!",
    );
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
            keyboardType='numeric'
            onSubmitEditing={(answer) ? props.onAddAnswer.bind(this, answer) : showAlert}
            placeholder="Enter your guess"
            style={styles.input}
            onChangeText={AnswerHandler}
            autoFocus={true}
            value={answer}
            /> 
            {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
            <Button title="Check" onPress={(answer) ? props.onAddAnswer.bind(this, answer) : showAlert} />
            {/* <TouchableOpacity style={styles.button} onPress={(answer) ? props.onAddAnswer.bind(this, answer) : showAlert}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity> */}
            
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        color: 'black',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        textAlign: 'center',
        padding: 10
    },
    button: {
        backgroundColor: "#FFFFFF",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        
    },
    plus: {
        fontSize: 35,
        color: '#C0C0C0'
    }
});

export default GoalInput;