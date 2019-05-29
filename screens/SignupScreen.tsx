import React from 'react';
import { View, Text } from 'react-native';

export default class SignupScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Sign up'
    };

    render () {
        return (
            <View>
                <Text>Sign up</Text>
            </View>
        )
    }
}