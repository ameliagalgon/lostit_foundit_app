import * as React from 'react';
import { View } from "react-native";
import { Input } from 'react-native-elements'

class FoundItemForm extends React.PureComponent {
    render() {
        return (
            <View>
                <Input label={"Name of item"}/>
            </View>
        );
    }
}

export default FoundItemForm;