import { StyleSheet, Text, View } from 'react-native'
import { useBanksList } from '../hooks/useBanksList'
import LoadingScreen from './LoadingScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BanksList() {

    const { banks, isLoading } = useBanksList();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <View style={{ ...styles.container, paddingTop: top }}>
            <Text>Banks List</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }

})