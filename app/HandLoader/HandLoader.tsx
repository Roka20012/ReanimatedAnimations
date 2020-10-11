import React, { useEffect } from 'react';
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    sequence,
    repeat,
    delay,
} from 'react-native-reanimated';

type FingerAnimatedStyle = {
    transform: [{ translateY: number }];
};

export type FingerProps = {
    fingerStyle: Animated.AnimateStyle<FingerAnimatedStyle>;
    lineStyle: Animated.AnimateStyle<FingerAnimatedStyle>;
    nailStyle: Animated.AnimateStyle<FingerAnimatedStyle>;
    style?: StyleProp<ViewStyle>;
};

const Finger = ({ style, fingerStyle, lineStyle, nailStyle }: FingerProps) => {
    return (
        <Animated.View style={[styles.finger, style, fingerStyle]}>
            <Animated.View style={lineStyle}>
                <View style={styles.line} />
                <View style={styles.line} />
            </Animated.View>
            <Animated.View style={[styles.nail, nailStyle]} />
        </Animated.View>
    );
};

function updateAnimatedValue(delayTime: number) {
    'worklet';
    return delay(
        delayTime,
        repeat(
            sequence(
                withTiming(-50, { duration: 400 }),
                withTiming(0),
                withTiming(0, { duration: 500 })
            ),
            -1,
            true
        )
    );
}

function updateAnimatedStyle(
    value: Animated.SharedValue<number>,
    height?: number,
    isLine?: boolean
) {
    'worklet';

    if (height) {
        return useAnimatedStyle(() => ({
            transform: [{ translateY: value.value }],
            height: height + value.value / 2,
        }));
    }

    if (isLine) {
        return useAnimatedStyle(() => ({
            transform: [{ translateY: value.value / 3 }],
        }));
    }

    return useAnimatedStyle(() => ({
        transform: [{ translateY: value.value / 5 }],
    }));
}

const HandLoader = () => {
    const fingerValue = useSharedValue(0);
    const fingerValue2 = useSharedValue(0);
    const fingerValue3 = useSharedValue(0);
    const fingerValue4 = useSharedValue(0);
    const thumbValue = useSharedValue(0);

    useEffect(() => {
        fingerValue.value = updateAnimatedValue(0);
        fingerValue2.value = updateAnimatedValue(50);
        fingerValue3.value = updateAnimatedValue(100);
        fingerValue4.value = updateAnimatedValue(150);
        thumbValue.value = updateAnimatedValue(100);
    }, []);

    const fingerStyle = updateAnimatedStyle(fingerValue, 108);
    const nailStyle = updateAnimatedStyle(fingerValue);
    const lineStyle = updateAnimatedStyle(fingerValue, undefined, true);
    const fingerStyle2 = updateAnimatedStyle(fingerValue2, 126);
    const nailStyle2 = updateAnimatedStyle(fingerValue2);
    const lineStyle2 = updateAnimatedStyle(fingerValue2, undefined, true);
    const fingerStyle3 = updateAnimatedStyle(fingerValue3, 142);
    const nailStyle3 = updateAnimatedStyle(fingerValue3);
    const lineStyle3 = updateAnimatedStyle(fingerValue3, undefined, true);
    const fingerStyle4 = updateAnimatedStyle(fingerValue4, 120);
    const nailStyle4 = updateAnimatedStyle(fingerValue4);
    const lineStyle4 = updateAnimatedStyle(fingerValue4, undefined, true);
    const thumbStyle = updateAnimatedStyle(thumbValue, 40);

    return (
        <View style={styles.container}>
            <Finger
                fingerStyle={fingerStyle}
                nailStyle={nailStyle}
                lineStyle={lineStyle}
            />
            <Finger
                style={styles.finger2}
                fingerStyle={fingerStyle2}
                nailStyle={nailStyle2}
                lineStyle={lineStyle2}
            />
            <Finger
                style={styles.finger3}
                fingerStyle={fingerStyle3}
                nailStyle={nailStyle3}
                lineStyle={lineStyle3}
            />
            <Finger
                style={styles.finger4}
                fingerStyle={fingerStyle4}
                nailStyle={nailStyle4}
                lineStyle={lineStyle4}
            />
            <Animated.View style={[styles.thumb, thumbStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03a9f4',
    },
    finger: {
        width: 42,
        height: 108,
        paddingTop: 10,
        marginRight: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        backgroundColor: 'white',
    },
    finger2: { height: 126 },
    finger3: { height: 142 },
    finger4: { height: 120 },
    line: {
        marginBottom: 3,
        width: 22,
        height: 6,
        backgroundColor: '#03a9f4',
    },
    nail: {
        width: 30,
        height: 30,
        marginBottom: 6,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#03a9f4',
    },
    thumb: {
        width: 39,
        height: 40,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 60,
        backgroundColor: 'white',
    },
});

export default HandLoader;
