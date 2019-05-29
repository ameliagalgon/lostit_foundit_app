import React from 'react';
import { View, Text, Button } from 'react-native';
import Input from '../components/Ui/Input';

export default class LoginScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Log in'
    };

    render () {
        return (
            <View>
                <Text>Login</Text>
                <Input placeholder={"Email"}/>
                <Input placeholder={"Password"} hidden={true}/>
                <Button title={"Log in"} onPress={() => {console.log("Hello. Logging in")}}/>
            </View>
        )
    }
}