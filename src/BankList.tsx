
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Bank } from './types/Bank'
import { getBanksList } from './helpers/getBanksList';
import LoadingScreen from './screens/LoadingScreen';

export const BankList = () => {

    const [banks, setBanks] = useState<Bank[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const data = await getBanksList();
            setBanks(data);
            setIsLoading(false);
        })()
    }, [])

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <View>
            <Text>BankList</Text>
        </View>
    )
}

const styles = StyleSheet.create({})