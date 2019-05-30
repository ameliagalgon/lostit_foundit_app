import React from 'react';
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ButtonDefault from '../components/Ui/ButtonDefault';
import Input from '../components/Ui/Input';
import {NavigationScreenProps} from "react-navigation";
import User from '../store/models/User';
import { ROUTES } from "../routes";

class LoginScreen extends React.PureComponent<NavigationScreenProps> {
    handleLogin = () => {
        const { navigation: { navigate } } = this.props;
        const defaultUser: User = {
            firstName: "Amelia",
            lastName: "Galgon",
            email: "agalgon@gmail.com"
        }
        navigate(ROUTES.HomePage, {user: defaultUser});
    }

    render () {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={"padding"}
            >
                <Text>Login</Text>
                <Input placeholder={"Email"}/>
                <Input placeholder={"Password"} hidden={true}/>
                <ButtonDefault title={"Log in"} handleClick={this.handleLogin}/>
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

export default LoginScreen;