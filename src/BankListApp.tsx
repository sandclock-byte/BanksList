
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BanksList from './screens/BanksList';
import BankDetail from './screens/BankDetail';
import { Bank } from './types/Bank';

export type RootStackParamList = {
    BanksList: undefined;
    BankDetail: { bank: Bank };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const BankListApp = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='BanksList' component={BanksList} />
            <Stack.Screen name='BankDetail' component={BankDetail} />
        </Stack.Navigator>
    )
}
