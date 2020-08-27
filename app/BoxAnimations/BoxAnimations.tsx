import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Button,
    View,
} from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

const MAX_WIDTH = Dimensions.get('window').width;

const BoxAnimations = () => {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: offset.value * 555 }],
            width: offset.value * MAX_WIDTH,
            height: offset.value * MAX_WIDTH,
        };
    });

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.box, animatedStyles]} />

            <Button
                onPress={() => {
                    offset.value = withSpring(Math.random());
                }}
                title="Move"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        justifyContent: 'space-between',
        borderWidth: 1,
    },
    box: {
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'cornflowerblue',
    },
});

export default BoxAnimations;
