import React from 'react';
import Fire from '../../Fire';
import { Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
// import User from "../store/Auth/models/user";
// import Input from "../components/Shared/Ui/Input";
import { Input } from "react-native-elements";
import ButtonDefault from "../components/Shared/Ui/ButtonDefault";
import { ROUTES } from "../store/constants";

interface State {
    email: string;
    password: string;
}

class SignupScreen extends React.PureComponent<NavigationScreenProps, State> {
    constructor(props: NavigationScreenProps) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSignUp = () => {
        const { email, password } = this.state;
        Fire.shared.signUp(email, password).then(() => {
            this.props.navigation.navigate(ROUTES.HomePage);
        });
    };

    render () {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={"padding"}
            >
                <Text>Sign Up</Text>
                <Input placeholder={"First name"}/>
                <Input placeholder={"Last name"}/>
                <Input placeholder={"Email"} onChangeText={(email: string) => this.setState({ email } )}/>
                <Input placeholder={"Password"} secureTextEntry={true} onChangeText={(password: string) => this.setState({ password } )}/>
                <Input placeholder={"Confirm password"} secureTextEntry={true}/>
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