import React from 'react';
import {
    Text,
    View,
    Platform,
    Pressable,
    StyleSheet,
    PlatformColor,
} from 'react-native';
import { HomeScreenProps } from './routes';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const goToBoxAnimationScreen = () =>
        navigation.navigate('BoxAnimationScreen');
    const goToClockAnimationScreen = () =>
        navigation.navigate('ClockAnimationScreen');
    const goToDotsLoaderScreen = () => navigation.navigate('DotsLoaderScreen');
    const goToHandLoaderScreen = () => navigation.navigate('HandLoaderScreen');

    return (
        <View>
            <Pressable style={styles.button} onPress={goToBoxAnimationScreen}>
                <Text style={styles.buttonText}>Box animation</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goToClockAnimationScreen}>
                <Text style={styles.buttonText}>Clock animation</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goToDotsLoaderScreen}>
                <Text style={styles.buttonText}>Dots loader animation</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={goToHandLoaderScreen}>
                <Text style={styles.buttonText}>Hand loader animation</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        ...Platform.select({
            ios: {
                borderBottomColor: PlatformColor('systemFill'),
            },
            android: {
                borderBottomColor: PlatformColor('?attr/colorControlNormal'),
            },
            default: { borderBottomColor: '#777' },
        }),
    },
    buttonText: {
        fontWeight: 'bold',
        ...Platform.select({
            ios: {
                color: PlatformColor('darkText'),
            },
            android: {
                color: PlatformColor('?attr/colorControlNormal'),
            },
            default: { color: '#777' },
        }),
    },
});

export default HomeScreen;
