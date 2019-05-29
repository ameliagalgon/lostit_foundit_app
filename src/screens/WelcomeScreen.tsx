import React from "react";
import { StyleSheet, Text, View} from "react-native";
import {
    NavigationScreenProps,
} from "react-navigation";
import ButtonDefault from '../components/Ui/ButtonDefault';
import { ROUTES } from "../routes";

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
})

class WelcomeScreen extends React.PureComponent<NavigationScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Lost it? Found it!</Text>
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

export default WelcomeScreen;