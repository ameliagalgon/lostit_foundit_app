import React from 'react';
import { View } from "react-native";

import CameraView from '../containers/Camera';

interface Props {

}

interface State {
    hasCameraPermissions: boolean | any;
    type: string;
}

class CameraScreen extends React.PureComponent<Props, State> {
    /*
    camera = null;

    state = {
        hasCameraPermissions: null,
        type: Camera.Constants.Type.back
    };

    componentDidMount() {
        this.checkPermissions().then((result) => {
            console.log(result);
        });
    }

    checkPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status === 'granted'
        });
    }

    snap = async () => {
        if (this.camera){
            // let photo = await this.camera.takePictureAsync();
        }
    }
    */

    render() {
        // const { hasCameraPermissions } = this.state;
        return (
            <View style={{flex: 1}}>
                <CameraView/>
            </View>
        );
    }
}

export default CameraScreen;