import React from 'react';
import { View } from "react-native";

import CameraView from '../containers/Camera';
import {ROUTES} from "../store/constants";
import {NavigationScreenProps} from "react-navigation";

interface State {
    hasCameraPermissions: boolean | any;
    type: string;
}

class CameraScreen extends React.PureComponent<NavigationScreenProps, State> {
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

    goBack = () => {
        this.props.navigation.navigate(ROUTES.FoundForm);
    }

    render() {
        // const { hasCameraPermissions } = this.state;
        return (
            <View style={{flex: 1}}>
                <CameraView goBack={this.goBack}/>
            </View>
        );
    }
}

export default CameraScreen;