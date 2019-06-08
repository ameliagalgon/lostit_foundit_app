import React from 'react';
import { Text, View, Alert } from "react-native";
import { Permissions, Camera } from "expo";
import {Input} from "react-native-elements";
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

interface Props {
    // handleOpenCamera: () => void;
    handleNext: () => void;
}

class InitialFoundItemForm extends React.PureComponent<Props> {
    state = {
        hasCameraPermissions: null,
        type: Camera.Constants.Type.back
    };

    /*
    constructor(props: Props) {
        super(props);
        this.state = {
            hasCameraPermissions: false,
            type: Camera.Constants.Type.back
        };
    }
    */

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        console.log(status === 'granted');
        this.setState(prevState => ({ 
            ...prevState,
            hasCameraPermission: status == 'granted'
        }), () => {
            console.log(`New permission: ${this.state.hasCameraPermissions}`);
        });
    }

    handleOpenCamera = () => {
        const { hasCameraPermissions } = this.state;
        console.log(hasCameraPermissions);
        if (hasCameraPermissions) {

        } else {
            // Works on both iOS and Android
            Alert.alert(
                'Alert',
                'You do not have Camera permissions on this app',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }
    }

    render() {
        const { handleNext } = this.props;
        return (
            <View>
                <Text>Thank you for reporting a found item!</Text>
                <Input label={"Name of item"}/>
                <Text>Do you want to take a photo?</Text>
                <ButtonDefault title={"Take a photo"} handleClick={this.handleOpenCamera}/>
                <ButtonDefault title={"Next"} handleClick={handleNext} />
            </View>
        );
    }
}

export default InitialFoundItemForm;