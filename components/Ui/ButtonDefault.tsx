import React from 'react';
import { Button, StyleSheet, View } from "react-native";

interface Props {
    title: string;
    handleClick: () => void;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        fontSize: 20,
        padding: 20,
        margin: 10,
    },
})

export default class ButtonDefault extends React.PureComponent<Props> {
    render() {
        const { title, handleClick } = this.props;
        return (
            <View style={styles.container}>
                <Button
                    title={title}
                    onPress={handleClick}
                />
            </View>
        )
    }
}