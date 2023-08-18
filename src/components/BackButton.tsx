import { Animated, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAnimationScale } from '../hooks/useAnimationScale';
import Icon from './Icon';

type Props = {
    iconSize?: number;
    iconColor?: string;
    style?: ViewStyle;
};

export const BackButton = ({ iconSize = 30, iconColor = 'black', style = {} }: Props) => {

    const navigation = useNavigation();

    const { scale, handlePressIn, handlePressOut } = useAnimationScale();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handleGoBack}
        >
            <Animated.View
                style={{
                    transform: [{ scale }],
                    ...style
                }}
            >
                <Icon name='back' size={iconSize} color={iconColor} />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}