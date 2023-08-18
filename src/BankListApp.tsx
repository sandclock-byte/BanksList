
import React from 'react'
import { useBanksList } from './hooks/useBanksList';
import LoadingScreen from './screens/LoadingScreen';
import BanksList from './screens/BanksList';

export const BankListApp = () => {

    const { banks, isLoading } = useBanksList();

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <BanksList banks={banks} />
    )
}
