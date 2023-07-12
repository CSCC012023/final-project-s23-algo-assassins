import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView
} from 'react-native';

import { TextInput, Button } from '@react-native-material/core';

import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import Toast from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = NativeStackScreenProps<RootStackParamList, 'NewPasswordScreen'>;

const { width, height } = Dimensions.get('window');

const NewPasswordScreen = ({ route, navigation }: Props) => {
    const [verification, setVerification] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState(''); // Can add this later

    const email = route.params.email;
    const key = route.params.key;
    const handleDone = async () => {
        if (verification == key) {
            try {
                const response = await fetch('http://localhost:3000/api/users/password/reset', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password, confirmPassword }),
                });
                if (response.ok) {
                    Toast.show({
                        type: 'success',
                        position: 'bottom',
                        text1: 'Password has been reset!'
                    });
                    navigation.navigate('LandingScreen');
                } else if (response.status == 400) {
                    Toast.show({
                        type: 'error',
                        position: 'bottom',
                        text1: 'Invalid password content.'
                    });
                } else if (response.status == 404) {
                    Toast.show({
                        type: 'error',
                        position: 'bottom',
                        text1: 'Email is not registered.'
                    });
                } else {
                    Toast.show({
                        type: 'error',
                        position: 'bottom',
                        text1: 'Password reset failed! Please try again.'
                    });
                }
            } catch (error) {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'An unknown error has occured. Please try again.'
                });
            }
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Invalid verification code. Please try again.'
            });
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <TouchableOpacity
                style={{ alignSelf: 'flex-start', marginTop: 0.02 * height, marginHorizontal: 0.02 * width }}
                onPress={() => navigation.navigate('ResetLogin')}>
                <AntDesign name="left" size={30} color="grey" />
            </TouchableOpacity>
            <View style={styles.viewContainer}>
                <TextInput
                    style={[styles.textInputContainer]}
                    label="Verification Code"
                    color="rgba(0, 0, 0, 0.3)"
                    variant="standard"
                    value={verification}
                    onChangeText={text => setVerification(text)}
                />
                <TextInput
                    style={[styles.textInputContainer]}
                    label="Password"
                    color="rgba(0, 0, 0, 0.3)"
                    variant="standard"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    style={[styles.textInputContainer]}
                    label="Confirm Password"
                    color="rgba(0, 0, 0, 0.3)"
                    variant="standard"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <Button
                    style={styles.buttonContainer}
                    color="#FFA500"
                    title="Done"
                    onPress={handleDone}
                />
            </View>
        </SafeAreaView >
    );
};

export default NewPasswordScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
    safeAreaViewContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    viewContainer: {
        top: height * 0.015
    },
    textInputContainer: {
        width: width * 0.94,
        marginVertical: 4
    },
    buttonContainer: {
        marginVertical: 4
    }
});
