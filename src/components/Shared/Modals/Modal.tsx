import React from 'react';
import { Overlay } from "react-native-elements";
import { View, Text } from "react-native";
import ModalHeader from './ModalHeader';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

class Modal extends React.PureComponent<Props> {
    render() {
        const { isOpen, handleClose } = this.props;
        return (
            <Overlay isVisible={isOpen}>
                <View>
                    <ModalHeader handleClose={handleClose}/>
                    <Text>THIS IS A DEFAULT MODAL</Text>
                </View>
            </Overlay>
        );
    }
}

export default Modal;