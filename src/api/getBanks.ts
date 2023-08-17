import { Bank } from '../types/Bank';

export const getBanksListOnline = async (): Promise<Bank[]> => {
    try {
        const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
        const banks = await response.json();
        return banks;
    } catch (error) {
        console.log(error);
        return [];
    }
}