import React from 'react';
import { View } from "react-native";
import { Button } from 'react-native-elements'

interface Props {
    title: string;
    handleClick: () => void;
}

class ButtonDefault extends React.PureComponent<Props> {
    render() {
        const { title, handleClick } = this.props;
        return (
            <View>
                <Button
                    title={title}
                    onPress={handleClick}
                    buttonStyle={{
                        padding: 10,
                        marginTop: 6,
                        marginBottom: 10,
                    }}
                />
            </View>
        )
    }
}

export default ButtonDefault;