import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../../Shared/Ui/Input';

interface Props {
    handleNext: () => void;
}

interface State {

}

class DescriptionLostItemForm extends React.PureComponent<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Please provide some information on the item you lost</Text>
                <Input placeholder={"Name of item"}/>
                <Input placeholder={"Description"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default DescriptionLostItemForm;