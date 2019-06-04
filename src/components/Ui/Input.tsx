import * as React from 'react';
import { Input } from "react-native-elements";

interface Props {
    placeholder: string;
    hidden?: boolean;
}

interface State {
    text: string;
}

class MyInput extends React.PureComponent<Props, State> {
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
           <Input
               autoCorrect={false}
               secureTextEntry={!!hidden}
               value={text}
               placeholder={placeholder}
               clearButtonMode={"always"}
               onChange={(event: any) => this.handleUpdateText(event.target.value)}
           />
        );
    }
}

export default MyInput;