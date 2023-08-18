import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../BankListApp';

type Props = NativeStackScreenProps<RootStackParamList, 'BankDetail'>;

export default function BankDetail({ route }: Props) {

    const { bank } = route.params;

    const { bankName, url, description, age } = bank;

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{ uri: url }}
                />
                <Text style={styles.bankName}>{bankName}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.age}>Edad: {age} años</Text>
                <Text style={styles.moreInformation}>Más Información</Text>
                <Text style={styles.textMoreInformation}>
                    Anim aliquip esse aliquip anim aute consequat eu id reprehenderit veniam ex eiusmod. Occaecat veniam aliqua in laborum consequat do nisi. Magna minim magna commodo Lorem sint consequat ex cupidatat laboris. Ullamco dolor cillum ad dolore quis labore magna ullamco.
                    Ad tempor Lorem adipisicing ea consequat in ex duis nisi veniam Lorem amet deserunt ad. Lorem consectetur qui occaecat commodo tempor. Exercitation nostrud consequat labore proident qui excepteur adipisicing nostrud nisi ut esse ut. Sunt consectetur quis voluptate proident. Consectetur ea ut consectetur sit commodo ut ullamco occaecat proident aute in.
                </Text>
                <View style={{ height: 50 }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    image: {
        width: '100%',
        height: 300
    },

    bankName: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        marginTop: 10
    },

    description: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginTop: 10
    },

    age: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginTop: 10
    },

    moreInformation: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        marginTop: 10
    },

    textMoreInformation: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'justify',
        marginHorizontal: 10,
        marginTop: 10
    }



})