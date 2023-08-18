import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Bank } from '../types/Bank'

type Props = {
    bank: Bank
}

export default function ListItem({ bank }: Props) {

    const { bankName, description, url } = bank;

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: url }}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.infoContainer}>
                <Text>{bankName}</Text>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 5,
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    infoContainer: {
        flex: 1,
        marginVertical: 10,
        marginRight: 10,
    },

    imageContainer: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white'
    }

})