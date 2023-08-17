
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Bank } from './types/Bank'
import { getBanksList } from './helpers/getBanksList';
import LoadingScreen from './screens/LoadingScreen';
import { useBanksList } from './hooks/useBanksList';

export const BankList = () => {

    const { banks, isLoading } = useBanksList();

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