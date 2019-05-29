import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

interface Props {
    placeholder: string;
    hidden?: boolean;
}

interface State {
    text: string;
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white'
    }
});

export default class Input extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleUpdateText = (newText: string) => {
        this.setState({
            text: newText
        });
    }


    render() {
        let { placeholder, hidden } = this.props;
        let { text } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    secureTextEntry={!!hidden}
                    value={text}
                    placeholder={placeholder}
                    placeholderTextColor={`white`}
                    underlineColorAndroid={"transparent"}
                    style={styles.textInput}
                    clearButtonMode={"always"}
                    onChange={(event: any) => this.handleUpdateText(event.target.value)}
                />
            </View>
        );
    }
}