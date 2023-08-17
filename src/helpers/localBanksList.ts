import { Bank } from '../types/Bank';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addBanksList2Local = async (bankList: Bank[]): Promise<void> => {
    try {
        await AsyncStorage.setItem('bankList', JSON.stringify(bankList));
    } catch (error) {
        console.log(error);
    }
}

export const getBanksListLocal = async (): Promise<Bank[]> => {
    try {
        const bankList = await AsyncStorage.getItem('bankList');
        return bankList ? JSON.parse(bankList) : [];
    } catch (error) {
        console.log(error);
        return [];
    }
}