import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Bank } from '../types/Bank'

type Props = {
    banks: Bank[]
}

export default function BanksList({ banks }: Props) {

    return (
        <View>
            <Text>BanksList</Text>
        </View>
    )
}

const styles = StyleSheet.create({})