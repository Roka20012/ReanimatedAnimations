import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'HomeScreen'
>;

export type ProfileScreenRouteProp = RouteProp<
    RootStackParamList,
    'HomeScreen'
>;

export type HomeScreenProps = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};
