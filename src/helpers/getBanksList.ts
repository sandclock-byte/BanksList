import { getBanksListOnline } from '../api/getBanks';
import { Bank } from '../types/Bank';
import { addBanksList2Local, getBanksListLocal } from './localBanksList';

export const getBanksList = async (): Promise<Bank[]> => {
    const localBankList: Bank[] = await getBanksListLocal();
    if (localBankList.length > 0) {
        return localBankList;
    }
    const banks: Bank[] = await getBanksListOnline();
    addBanksList2Local(banks);
    return banks;
}; 