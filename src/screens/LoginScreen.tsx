import React from 'react';
import { Input } from "react-native-elements";
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ButtonDefault from '../components/Shared/Ui/ButtonDefault';
import {NavigationScreenProps} from "react-navigation";
// import User from '../store/Auth/models/User';
import { ROUTES } from "../store/constants";
import { setUser } from "../store/Auth/actionCreators";
import {connect} from "react-redux";

import AuthService from '../services/Auth';

interface Props {
    setUser: (user: any) => void;
}

interface State {
    email: string;
    password: string;
}

type FinalProps = NavigationScreenProps & Props;

class LoginScreen extends React.PureComponent<FinalProps, State> {

    handleLogin = () => {
        const { navigation: { navigate } } = this.props;
        const { email, password } = this.state;
        AuthService.loginWithEmailAndPass(email, password);
        navigate(ROUTES.HomePage);
    };

    render () {
        return (
            <KeyboardAvoidingView
                style={newStyles.container}
                behavior={"padding"}
            >
                <Text>Login</Text>
                <Input placeholder={"Email"} onChangeText={(email: string) => {
                    this.setState({ email })
                }}/>
                <Input placeholder={"Password"} onChangeText={(password: string) => this.setState({ password })} secureTextEntry={true}/>
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