import React from 'react';
// import Fire from '../../Fire';
import {Text, KeyboardAvoidingView, StyleSheet, Alert} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
// import User from "../store/Auth/models/user";
// import Input from "../components/Shared/Ui/Input";
import { Input } from "react-native-elements";
import ButtonDefault from "../components/Shared/Ui/ButtonDefault";
import AuthService from '../services/Auth';
import {ROUTES} from "../store/constants";

interface State {
    email: string;
    password: string;
    passwordConfirmation: string;
}

class SignupScreen extends React.PureComponent<NavigationScreenProps, State> {
    constructor(props: NavigationScreenProps) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirmation: ""
        };
    }

    handleSignUp = () => {
        const { email, password, passwordConfirmation } = this.state;
        if (password === passwordConfirmation) {
            //create and sign in user
            AuthService.createUserWithEmailAndPass(email, password);
            this.props.navigation.navigate(ROUTES.HomePage);
        } else {
            Alert.alert('Error',
                'Your password and password confirmation do not match',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel'},
                ],
                {cancelable: false},)
        }
    };

    render () {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={"padding"}
            >
                <Text>Sign Up</Text>
                <Input placeholder={"Email"} onChangeText={(email: string) => this.setState({ email } )}/>
                <Input placeholder={"Password"} secureTextEntry={true} onChangeText={(password: string) => this.setState({ password } )}/>
                <Input placeholder={"Confirm password"} secureTextEntry={true} onChangeText={(passwordConfirmation: string) => this.setState({ passwordConfirmation })}/>
                <ButtonDefault title={"Sign up"} handleClick={this.handleSignUp}/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignupScreen;