import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Switch,
    Text,
    View,
} from 'react-native';
import Animated, {
    useAnimatedStyle,
    cancelAnimation,
    useSharedValue,
    withTiming,
    sequence,
    repeat,
    delay,
} from 'react-native-reanimated';

const BoxAnimations = () => {
    const box1 = useSharedValue(1);
    const box2 = useSharedValue(1);
    const box3 = useSharedValue(1);
    const box4 = useSharedValue(1);
    const box5 = useSharedValue(1);
    const box6 = useSharedValue(1);
    const box7 = useSharedValue(1);
    const box8 = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: box1.value }],
        opacity: box1.value,
    }));

    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ scale: box2.value }],
        opacity: box2.value,
        top: 10,
        left: 50,
    }));

    const animatedStyle3 = useAnimatedStyle(() => ({
        transform: [{ scale: box3.value }],
        opacity: box3.value,
        top: 20,
        left: 100,
    }));

    const animatedStyle4 = useAnimatedStyle(() => ({
        transform: [{ scale: box4.value }],
        opacity: box4.value,
        top: 30,
        left: 50,
    }));

    const animatedStyle5 = useAnimatedStyle(() => ({
        transform: [{ scale: box5.value }],
        opacity: box5.value,
        top: 40,
    }));

    const animatedStyle6 = useAnimatedStyle(() => ({
        transform: [{ scale: box6.value }],
        opacity: box6.value,
        top: -50,
        left: -50,
    }));

    const animatedStyle7 = useAnimatedStyle(() => ({
        transform: [{ scale: box7.value }],
        opacity: box7.value,
        top: -140,
        left: -100,
    }));

    const animatedStyle8 = useAnimatedStyle(() => ({
        transform: [{ scale: box8.value }],
        opacity: box8.value,
        top: -230,
        left: -50,
    }));

    const [value, setValue] = useState<boolean>(false);

    useEffect(() => {
        if (!value) {
            cancelAnimation(box1);
            cancelAnimation(box2);
            cancelAnimation(box3);
            cancelAnimation(box4);
            cancelAnimation(box5);
            cancelAnimation(box6);
            cancelAnimation(box7);
            cancelAnimation(box8);
            return;
        }

        box1.value = repeat(
            sequence(
                withTiming(0.3, { duration: 600 }),
                withTiming(1, { duration: 200 })
            ),
            -1,
            true
        );

        box2.value = delay(
            100,
            repeat(
                sequence(
                    withTiming(0.3, { duration: 600 }),
                    withTiming(1, { duration: 200 })
                ),
                -1,
                true
            )
        );
        box3.value = delay(
            200,
            repeat(
                sequence(
                    withTiming(0.3, { duration: 600 }),
                    withTiming(1, { duration: 200 })
                ),
                -1,
                true
            )
        );
        box4.value = delay(
            300,
            repeat(
                sequence(
                    withTiming(0.3, { duration: 600 }),
                    withTiming(1, { duration: 200 })
                ),
                -1,
                true
            )
        );
        box5.value = delay(
            400,
            repeat(
                sequence(
                    withTiming(0.3, { duration: 600 }),
                    withTiming(1, { duration: 200 })
                ),
                -1,
                true
            )
        );
        box6.value = delay(
            500,
            repeat(
                sequence(
                    withTiming(0.3, { duration: 600 }),
                    withTiming(1, { duration: 200 })
                ),
                -1,
                true
            )
        );
        box7.value = delay(
            600,
            repeat(
                sequence(
                    withTiming(0.3, { duration: 600 }),
                    withTiming(1, { duration: 200 })
                ),
                -1,
                true
            )
        );
        box8.value = delay(
            700,
            repeat(
                sequence(
                    withTiming(0.3, { duration: 600 }),
                    withTiming(1, { duration: 200 })
                ),
                -1,
                true
            )
        );
    }, [value]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.blocksContainer}>
                <Animated.View style={[styles.box, animatedStyle]} />
                <Animated.View style={[styles.box, animatedStyle2]} />
                <Animated.View style={[styles.box, animatedStyle3]} />
                <Animated.View style={[styles.box, animatedStyle4]} />
                <Animated.View style={[styles.box, animatedStyle5]} />
                <Animated.View style={[styles.box, animatedStyle6]} />
                <Animated.View style={[styles.box, animatedStyle7]} />
                <Animated.View style={[styles.box, animatedStyle8]} />
            </View>
            <View style={styles.bottomViewContainer}>
                <Text style={styles.buttonText}>START ENGINE</Text>
                <Switch
                    style={{ alignSelf: 'center' }}
                    trackColor={{
                        true: 'cornflowerblue',
                        false: 'black',
                    }}
                    ios_backgroundColor="#777"
                    value={value}
                    onValueChange={setValue}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ee5555',
    },
    blocksContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        position: 'absolute',
        bottom: 100,
        paddingVertical: 11,
        backgroundColor: 'cornflowerblue',
        borderRadius: 10,
        width: '50%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    bottomViewContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 21,
    },
    buttonText: {
        marginBottom: 11,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    box: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
});

export default BoxAnimations;
