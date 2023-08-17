import { useEffect, useState } from 'react';
import { getBanksList } from '../helpers/getBanksList';
import { Bank } from '../types/Bank';
import { delay } from '../helpers/delay';

export const useBanksList = () => {

    const [banks, setBanks] = useState<Bank[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const data = await getBanksList();
            setBanks(data);
            await delay(3000);
            setIsLoading(false);
        })()
    }, [])

    return {
        banks,
        isLoading
    }

};