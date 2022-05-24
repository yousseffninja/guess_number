import react, {useState} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';


const GoalItem = props => {

    const showAlert = () =>{
        Alert.alert(
            `${props.title}`,
            `Welecome to ${props.title}`
            )
    }

    return(
        <View>
            <TouchableOpacity onPress = {showAlert} style={styles.listItem}>
                <View style={styles.boxSpace}>
                    <Text style={styles.box}> </Text>
                    <Text>{props.title}</Text>
                </View>
                <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
                    <Text style={styles.circle}> </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        overflow: "visible"
    },
    boxSpace: {
        flexDirection: "row",
    },
    box: {
        height: 24,
        width: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        marginRight: 10,
    },
    circle: {
        alignSelf: 'flex-start',
        width: 12,
        height: 12,
        marginTop: 5,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5
    }
});

export default GoalItem;