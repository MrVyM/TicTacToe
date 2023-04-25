import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styles from '../styles'
import { Text, View, Button, TouchableOpacity } from 'react-native'



const onPress = () => {
    alert('clicked')
}

export default class Square extends React.Component
{
    render() {
        return (
            <TouchableOpacity onPress={onPress}>
            <View style={styles.square}>
                <Text fontSize={{fontSize: 50}} >{this.props.name}</Text>
            </View>
            </TouchableOpacity>
        );
    }
}

