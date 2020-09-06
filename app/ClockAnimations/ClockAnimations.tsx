import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    repeat,
    Easing,
} from 'react-native-reanimated';

function runClock(
    minuteArrowValue: Animated.SharedValue<number>,
    hoursArrowValue: Animated.SharedValue<number>
) {
    'worklet';
    minuteArrowValue.value = repeat(
        withTiming((3 * Math.PI) / 2, {
            duration: 360 * 2,
            easing: Easing.linear,
        }),
        -1
    );
    hoursArrowValue.value = repeat(
        withTiming(2 * Math.PI, {
            duration: 4320 * 2,
            easing: Easing.linear,
        }),
        -1
    );
}

const ClockAnimations = () => {
    const minuteArrowValue = useSharedValue(-Math.PI / 2);
    const hoursArrowValue = useSharedValue(0);

    useEffect(() => {
        runClock(minuteArrowValue, hoursArrowValue);
    }, []);

    const minuteArrowAnimation = useAnimatedStyle(() => ({
        transform: [{ rotate: minuteArrowValue.value }, { translateX: 15 }],
    }));

    const hoursArrowAnimation = useAnimatedStyle(() => ({
        transform: [{ rotate: hoursArrowValue.value }, { translateX: 15 }],
    }));

    return (
        <View style={styles.container}>
            <View style={styles.clockCircle}>
                <View style={styles.clockCircleCenterDot} />
                <Animated.View
                    style={[styles.clockArrow, minuteArrowAnimation]}
                />
                <Animated.View
                    style={[styles.clockArrow, hoursArrowAnimation]}
                />
            </View>
            <Text style={styles.buttonText}>Clock Animation</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ee5555',
    },
    buttonText: {
        marginTop: 21,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    clockCircle: {
        borderWidth: 9,
        borderColor: 'white',
        justifyContent: 'center',
        borderRadius: 50,
        height: 100,
        width: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    clockCircleCenterDot: {
        zIndex: 1,
        alignSelf: 'center',
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    clockArrow: {
        position: 'absolute',
        alignSelf: 'center',
        width: 40,
        borderRadius: 25,
        height: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default ClockAnimations;
