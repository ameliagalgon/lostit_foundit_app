import React from 'react';
import { Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
import User from "../store/Auth/models/user";
import {ROUTES} from "../store/constants";
import Input from "../components/Shared/Ui/Input";
import ButtonDefault from "../components/Shared/Ui/ButtonDefault";

class SignupScreen extends React.PureComponent<NavigationScreenProps> {
    handleLogin = () => {
        const { navigation: { navigate } } = this.props;
        const defaultUser: User = {
            firstName: "Amelia",
            lastName: "Galgon",
            email: "agalgon@gmail.com"
        };
        navigate(ROUTES.HomePage, {user: defaultUser});
    }

    render () {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={"padding"}
            >
                <Text>Sign in</Text>
                <Input placeholder={"First name"}/>
                <Input placeholder={"Last name"}/>
                <Input placeholder={"Email"}/>
                <Input placeholder={"Password"} hidden={true}/>
                <Input placeholder={"Confirm password"} hidden={true}/>
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

export default SignupScreen;