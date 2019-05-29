import React from 'react';
import { View, Text } from 'react-native';
import ButtonDefault from '../components/Ui/ButtonDefault';
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
                <ButtonDefault title={"Log in"} handleClick={() => {console.log("Hello. Logging in")}}/>
            </View>
        )
    }
}