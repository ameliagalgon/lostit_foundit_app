import React from 'react';
import { View, Text, StyleSheet } from "react-native";

interface Props {
    handleClose: () => void;
}

class ModalHeader extends React.PureComponent<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.props.handleClose}>Cancel</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // position: 'fixed',
        // flex: 1,
        justifyContent: "flex-end",
        padding: 10,
        width: '100%',
        height: 50,
    }
});
export default ModalHeader;