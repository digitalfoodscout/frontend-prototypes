/**
 * Created by Max on 09.05.2017.
 */
'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class HelloWorld extends React.Component {
    render() {
        return (
            <View style={styles.container}>
    <Text style={styles.hello}>This is React Native</Text>
        </View>
    )
    }
}
var styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'top',
        backgroundColor: "#AAAAAA",

    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: "#AAAAAA",
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);