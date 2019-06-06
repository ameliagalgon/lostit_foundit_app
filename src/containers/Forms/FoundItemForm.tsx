import * as React from 'react';
import { Text, View } from "react-native";
import { Input } from 'react-native-elements'

class FoundItemForm extends React.PureComponent {
    render() {
        return (
            <View>
                <Text>FOUND ITEM FORM</Text>
                <Input label={"Name of item"}/>
            </View>
        );
    }
}

export default FoundItemForm;