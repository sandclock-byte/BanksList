import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useBanksList } from '../hooks/useBanksList'
import LoadingScreen from './LoadingScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';

export default function BanksList() {

    const { banks, isLoading } = useBanksList();


    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={banks}
                keyExtractor={item => item.url}
                ListHeaderComponent={Header}
                renderItem={({ item }) => <ListItem bank={item} />}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListFooterComponent={() => <View style={{ height: 20 }} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const Header = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{ ...styles.header, paddingTop: top + 10 }}>
            <Text style={styles.textHeader}>Lista de Bancos</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        paddingBottom: 10,
    },

    textHeader: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center'
    }

})