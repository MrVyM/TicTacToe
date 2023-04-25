import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styles from '../styles'
import { Text, View } from 'react-native'

export default class Settings extends React.Component
{
    render() {
        return (
            <View style={styles.square} >
                <Text> Test </Text>
            </View>
        );
    }
}

