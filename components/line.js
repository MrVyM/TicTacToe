import React from 'react'
import styles from '../styles'
import Square from './square'
import { View } from 'react-native'

export default class Line extends React.Component
{
    render () {
        return (
            <View style={styles.line} backgroundColor={styles.backgroundColor} >
                <Square name="X"/>
                <Square name="O"/>
                <Square name="X"/>
            </View>
        );
    }
}
