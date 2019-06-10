import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../../Shared/Ui/Input';
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

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
                <ButtonDefault title={"Next"} handleClick={this.props.handleNext}/>
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