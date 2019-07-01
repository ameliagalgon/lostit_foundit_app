import React from "react";
// import { Google } from 'expo';
import { AppState } from "../store/types";
import { StyleSheet, Text, View} from "react-native";
import {
    NavigationScreenProps,
} from "react-navigation";
import ButtonDefault from '../components/Shared/Ui/ButtonDefault';
import { ROUTES } from "../store/constants";
// import { IOS_CLIENT_ID } from 'react-native-dotenv';
import {getUser} from "../store/Auth/selectors";
import {connect} from "react-redux";

interface Props {
    currentUser: any;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
});

type FinalProps = NavigationScreenProps & Props;

/*
async function handleClick(): Promise<void> {
    console.log("handle google auth");
    const clientId = '<IOS-CLIENT-ID>';
    const result = await Google.logInAsync({
        iosClientId: clientId,
        scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
        console.log(result.user);
    }
}

*/

class WelcomeScreen extends React.PureComponent<FinalProps> {
    /*
    constructor(props: FinalProps) {
        super(props);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    async function handleGoogleLogin(): Promise<void> {
        console.log("handle google auth");
        const clientId = '149545544810-e26d3cb9vbvq2a5i9593udiup4caap5f.apps.googleusercontent.com';
        const { type, accessToken, user } = await Google.logInAsync({ iosClientId: clientId });

        if (type === 'success') {
            console.log(user);
        }
    }
    */


    constructor(props: FinalProps) {
        super(props);
    }

    componentDidMount() {
        // TODO: Check to see if a user is already logged in
        const { currentUser } = this.props;
        if (currentUser) {
            this.props.navigation.navigate(ROUTES.HomePage);
        }
        //AuthService.logout();
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Lost it? Found it!</Text>
                <ButtonDefault title={"Sign in with Google"} handleClick={() => {console.log('Google Auth not implemented')}}/>
                <ButtonDefault
                    title="Log in"
                    handleClick={() => {
                        this.props.navigation.navigate(ROUTES.Login);
                    }}
                />
                <ButtonDefault
                    title={"Sign up"}
                    handleClick={() => {
                        this.props.navigation.navigate(ROUTES.Signup)
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    currentUser: getUser(state),
});

export default connect(mapStateToProps)(WelcomeScreen);