import { useRef } from 'react';
import { Animated } from 'react-native';

type Config = {
    scale: number;
    duration: number;
};

export const useAnimationScale = (config: Config = { scale: 0.85, duration: 300 }) => {

    const { scale, duration } = config;

    const scaleAnimation = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.timing(
            scaleAnimation,
            {
                toValue: scale,
                duration: duration,
                useNativeDriver: true
            }
        ).start();
    };

    const handlePressOut = () => {
        Animated.timing(
            scaleAnimation,
            {
                toValue: 1,
                duration: duration,
                useNativeDriver: true
            }
        ).start();
    };

    return {
        scale: scaleAnimation,
        handlePressIn,
        handlePressOut
    }

};