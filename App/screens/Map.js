import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Map extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello world</Text>
            </View>
        )
    }
}

const styles = StylesSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})