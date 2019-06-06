import React from 'react';
import { Overlay } from "react-native-elements";
import { View, Text } from "react-native";
import ModalHeader from './ModalHeader';

interface Props {
    isOpen: boolean;
    body: React.ReactNode;
    title: string;
    handleClose: () => void;
}

class Modal extends React.PureComponent<Props> {
    render() {
        const { isOpen, handleClose, body, title } = this.props;
        return (
            <Overlay isVisible={isOpen}>
                <View>
                    <ModalHeader handleClose={handleClose}/>
                    <Text>{title}</Text>
                    <View>{body}</View>
                </View>
            </Overlay>
        );
    }
}

export default Modal;