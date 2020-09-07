import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    sequence,
    repeat,
    delay,
} from 'react-native-reanimated';

function updateAnimatedValue(delayTime: number) {
    'worklet';
    return delay(
        delayTime,
        repeat(
            sequence(
                withTiming(-50),
                withTiming(50),
                withTiming(-25),
                withTiming(25),
                withTiming(-10),
                withTiming(10),
                withSpring(0, { damping: 200, stiffness: 200 })
            ),
            -1,
            true
        )
    );
}

function updateAnimatedStyle(value: Animated.SharedValue<number>) {
    'worklet';
    return useAnimatedStyle(() => ({
        transform: [{ translateY: value.value }],
    }));
}

const DotsLoader = () => {
    const dot1 = useSharedValue(0);
    const dot2 = useSharedValue(0);
    const dot3 = useSharedValue(0);
    const dot4 = useSharedValue(0);

    useEffect(() => {
        dot1.value = updateAnimatedValue(0);
        dot2.value = updateAnimatedValue(100);
        dot3.value = updateAnimatedValue(200);
        dot4.value = updateAnimatedValue(300);
    }, []);

    const dot1Style = updateAnimatedStyle(dot1);
    const dot2Style = updateAnimatedStyle(dot2);
    const dot3Style = updateAnimatedStyle(dot3);
    const dot4Style = updateAnimatedStyle(dot4);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.dot, styles.dot1, dot1Style]} />
            <Animated.View style={[styles.dot, styles.dot2, dot2Style]} />
            <Animated.View style={[styles.dot, styles.dot3, dot3Style]} />
            <Animated.View style={[styles.dot, styles.dot4, dot4Style]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dot: {
        width: 21,
        height: 21,
        marginHorizontal: 13,
        borderRadius: 21 / 2,
        backgroundColor: 'red',
    },
    dot1: { backgroundColor: '#0F9D58' },
    dot2: { backgroundColor: '#F4B400' },
    dot3: { backgroundColor: '#DB4437' },
    dot4: { backgroundColor: '#4285F4' },
});

export default DotsLoader;
