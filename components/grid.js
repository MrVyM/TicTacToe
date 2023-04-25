import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styles from '../styles'
import { StyleSheet, Text, View } from 'react-native'
import Line from './line'



export default class Grid extends React.Component
{
    render() {
        return (
            <View>
                <Line />
                <Line />
                <Line />
            </View>
        );
    }
}
