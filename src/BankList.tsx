
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Bank } from './types/Bank'
import { getBanksList } from './helpers/getBanksList';

export const BankList = () => {

    const [banks, setBanks] = useState<Bank[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getBanksList();
            setBanks(data);
        })()
    }, [])

    return (
        <View>
            <Text>BankList</Text>
        </View>
    )
}

const styles = StyleSheet.create({})