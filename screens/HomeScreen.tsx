import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

import {
    NavigationScreenComponent,
    NavigationScreenProps,
    NavigationStackScreenOptions
} from "react-navigation";
import { ROUTES } from "../constants/routes";

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

export default class HomeScreen extends React.PureComponent<NavigationScreenProps> {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lost it? Found it!</Text>
                <Button
                    title="Log in"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate(ROUTES.Login);
                    }}
                />
                <Button
                    title={"Sign up"}
                    onPress={() => {
                        this.props.navigation.navigate(ROUTES.Signup)
                    }}
                />
            </View>
        );
    }
}