import React, { useEffect } from 'react';
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native';
import Animated, {
    withSpring,
    withTiming,
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

type FingerAnimatedStyle = {
    transform: [{ translateY: number }];
};

export type FingerProps = {
    style?: StyleProp<ViewStyle>;
    fingerStyle: Animated.AnimateStyle<FingerAnimatedStyle>;
    lineStyle: Animated.AnimateStyle<FingerAnimatedStyle>;
    nailStyle: Animated.AnimateStyle<FingerAnimatedStyle>;
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

function updateAnimatedValue() {
    'worklet';
}

const HandLoader = () => {
    const fingerValue = useSharedValue(0);

    useEffect(() => {}, []);

    const fingerStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withSpring(-100),
            },
        ],
    }));

    return (
        <View style={styles.container}>
            <Finger fingerStyle={fingerStyle} />
            <Finger style={styles.finger2} fingerStyle={fingerStyle} />
            <Finger style={styles.finger3} fingerStyle={fingerStyle} />
            <Finger style={styles.finger4} fingerStyle={fingerStyle} />
            <View style={styles.thumb} />
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
