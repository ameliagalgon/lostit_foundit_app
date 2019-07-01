import React from 'react';
import { Input } from "react-native-elements";
import {Text, KeyboardAvoidingView, StyleSheet, Alert, ActivityIndicator, View} from 'react-native';
import ButtonDefault from '../components/Shared/Ui/ButtonDefault';
import {NavigationScreenProps} from "react-navigation";
// import User from '../store/Auth/models/User';
import { ROUTES } from "../store/constants";

import AuthService from '../services/Auth';
import {setUser} from "../store/Auth/actionCreators";
import { connect } from "react-redux";

interface Props {
    setUser: (user: any) => void;
}

interface State {
    email: string;
    password: string;
    loading: boolean;
}

type FinalProps = NavigationScreenProps & Props;

class LoginScreen extends React.PureComponent<FinalProps, State> {
    state = {
        email: '',
        password: '',
        loading: false
    };

    handleLogin = () => {
        //TODO: Make sure that you can seemlessly log in one after the other
        const { navigation: { navigate } } = this.props;
        const { email, password } = this.state;
        this.setState({
            loading: true
        });
        AuthService.loginWithEmailAndPass(email, password).then(result => {
            if (!result.user) {
                console.log('error');
                Alert.alert('Error',
                    `${result.message}`,
                    [{
                        text: 'Try again'
                    }]);
            } else {
                navigate(ROUTES.HomePage);
            }
        }).then(() => {
            this.setState({
                loading: false
            });
        });

        console.log("something happened");
    };

    render () {
        const { loading } = this.state;
        if (loading) {
            return (
                <View style={newStyles.container}>
                    <ActivityIndicator size={"large"}/>
                </View>
            )
        }
        return (
            <KeyboardAvoidingView
                style={newStyles.container}
                behavior={"padding"}
            >

                        <Text>Login</Text>
                        <Input placeholder={"Email"} onChangeText={email => this.setState({ email })}/>
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

const mapDispatchToProps = {
    setUser,
};

export default connect(null, mapDispatchToProps)(LoginScreen);