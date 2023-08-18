
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BanksList from './screens/BanksList';

const Stack = createNativeStackNavigator();

export const BankListApp = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='BanksList' component={BanksList} />
        </Stack.Navigator>
    )
}
