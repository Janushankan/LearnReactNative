import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.outerView}>
            <View style={styles.one}><Text>One</Text></View>
            <View style={styles.two}><Text>Two</Text></View>
            <View style={styles.three}><Text>Three</Text></View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    one: {
        // flex: 1,
        width: 50,
        height: 50,    // 150 -> while overflow
        backgroundColor: 'red',
    },
    two: {
        // flex: 2,
        width: 50,
        height: 50,    // 150 -> while overflow
        // alignSelf: 'flex-end', // flex-start, flex-end, center, stretch, baseline
        backgroundColor: 'yellow',
    },
    three: {
        // flex: 3,
        width: 50,
        height: 50,    // 150 -> while overflow
        backgroundColor: 'green',
    },
    outerView: {
        width: 250,
        height: 250,
        top: 20,
        position: 'absolute', // relative, absolute, fixed
        flexDirection: 'column',    // column, column-reverse, row, row-reverse
        // justifyContent: 'center',   // flex-start, flex-end, center, space-between, space-around, space-evenly
        // alignItems: 'center',       // flex-start, flex-end, center, stretch[while using width, height -> not working], baseline
        backgroundColor: 'pink',

        // while overflown
        // flexWrap: 'wrap',   // wrap, nowrap, wrap-reverse
        // alignContent: 'center', // flex-start, flex-end, center, space-between, space-around, stretch
    },
});
