import React from 'react';
import { Overlay } from "react-native-elements";
import { Text } from "react-native";

interface Props {
    isOpen: boolean;
}

class Modal extends React.PureComponent<Props> {
    render() {
        const { isOpen } = this.props;
        return (
            <Overlay isVisible={isOpen}>
                <Text>THIS IS A DEFAULT MODAL</Text>
            </Overlay>
        );
    }
}

export default Modal;