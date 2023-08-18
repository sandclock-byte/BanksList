
import { StyleSheet, Text, View } from 'react-native';

import Back from '../../assets/svg/back.svg';

type Props = {
    name?: keyof typeof icons;
    size?: number;
    color?: string;
}

const icons = {
    back: Back
};

export default function Icon({ name = 'back', size = 30, color = 'black' }: Props) {

    // const IconComponent = icons[name];

    return (
        <View style={{
            ...styles.container,
            width: 80,
            height: 80
        }}>
            <Back
                width='100%'
                height='100%'
                fill={color}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }

})
