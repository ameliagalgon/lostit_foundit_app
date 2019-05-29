import React from "react";
import { StyleSheet, Text, View} from "react-native";
import {
    NavigationScreenComponent,
    NavigationScreenProps,
    NavigationStackScreenOptions
} from "react-navigation";
import ButtonDefault from '../components/Ui/ButtonDefault';
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
                <ButtonDefault
                    title="Log in"
                    handleClick={() => {
                        /* 1. Navigate to the Details route with params */
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