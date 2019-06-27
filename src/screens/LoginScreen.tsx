import React from 'react';
import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ButtonDefault from '../components/Shared/Ui/ButtonDefault';
import Input from '../components/Shared/Ui/Input';
import {NavigationScreenProps} from "react-navigation";
// import User from '../store/Auth/models/User';
import { ROUTES } from "../store/constants";
import { setUser } from "../store/Auth/actionCreators";
import User from '../store/Auth/models/user';
import {generateUUID} from "../helpers/uuid";
import {connect} from "react-redux";

interface Props {
    setUser: (user: any) => void;
}

type FinalProps = NavigationScreenProps & Props;

class LoginScreen extends React.PureComponent<FinalProps> {
    handleLogin = () => {
        const { navigation: { navigate } } = this.props;
        const defaultUser: User = {
            id: generateUUID(),
            firstName: "Test",
            lastName: "User",
            email: "test@gmail.com"
        };
        this.props.setUser(defaultUser);
        navigate(ROUTES.HomePage);
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

const mapDispatchToProps = {
    setUser
};

export default connect(null, mapDispatchToProps)(LoginScreen);