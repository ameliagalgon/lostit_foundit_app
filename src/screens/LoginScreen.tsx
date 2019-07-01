import React from 'react';
import { Input } from "react-native-elements";
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ButtonDefault from '../components/Shared/Ui/ButtonDefault';
import {NavigationScreenProps} from "react-navigation";
// import User from '../store/Auth/models/User';
import { ROUTES } from "../store/constants";

import AuthService from '../services/Auth';

interface State {
    email: string;
    password: string;
}

type FinalProps = NavigationScreenProps;

class LoginScreen extends React.PureComponent<FinalProps, State> {
    state = {
        email: '',
        password: ''
    };

    handleLogin = () => {
        const { navigation: { navigate } } = this.props;
        const { email, password } = this.state;
        AuthService.loginWithEmailAndPass(email, password).then(() => {
            navigate(ROUTES.HomePage)
        });
        // navigate(ROUTES.HomePage);
    };

    render () {
        return (
            <KeyboardAvoidingView
                style={newStyles.container}
                behavior={"padding"}
            >
                <Text>Login</Text>
                <Input
                    value={this.state.email}
                    placeholder={"Email"}
                    onChangeText={email => this.setState({ email })}
                />
                <Input placeholder={"Password"} onChangeText={password => this.setState({ password })} secureTextEntry={true}/>
                <ButtonDefault title={"Log in"} handleClick={this.handleLogin}/>
            </KeyboardAvoidingView>
        )
    }
}

const newStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoginScreen;