import React from 'react'
import styles from '../styles'
import { Text, View } from 'react-native'
import Grid from './grid'

export default class Home extends React.Component
{
    render() {
        return (
            <View style={styles.container} >
                
                <Grid />
            </View>
        );
    }
}
