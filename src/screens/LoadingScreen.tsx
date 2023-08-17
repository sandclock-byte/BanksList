import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <LottieView
                style={styles.animation}
                source={require('../../assets/animations/loading.json')}
                autoPlay
                loop
            />
            <Text style={styles.text}>Consultando información.</Text>
            <Text style={styles.text}>Espere un momento por favor.</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    animation: {
        width: 200,
        height: 200
    },

    text: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular'
    }

})