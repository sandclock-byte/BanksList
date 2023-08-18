import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Bank } from '../types/Bank'
import { useNavigation } from '@react-navigation/native'

type Props = {
    bank: Bank
}


export default function ListItem({ bank }: Props) {

    const navigation = useNavigation<any>();

    const { bankName, description, url } = bank;

    const goToDetail = () => {
        navigation.navigate('BankDetail', { bank });
    }

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
                <Text style={styles.bankName}>{bankName}</Text>
                <Text
                    style={styles.description}
                    adjustsFontSizeToFit
                    numberOfLines={2}
                >
                    {description}
                </Text>
                <Text
                    style={styles.link}
                    onPress={goToDetail}
                >
                    Ver más
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: '#E7E7E7',
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
    },

    bankName: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
    },

    description: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },

    link: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        textAlign: 'right',
    }

})