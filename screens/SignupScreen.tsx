import React from 'react';
import { View, Text } from 'react-native';

class SignupScreen extends React.PureComponent {
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

export default SignupScreen;