import * as React from 'react';
import { Text, View } from "react-native";
import { Input } from 'react-native-elements'

class LostItemForm extends React.PureComponent {
    render() {
        return (
            <View>
                <Text>LOST ITEM FORM</Text>
                <Input label={"Name of item"}/>
            </View>
        );
    }
}

export default LostItemForm;