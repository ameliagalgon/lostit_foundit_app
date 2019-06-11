import React from 'react';
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { Camera, Permissions } from "expo";
import Toolbar from '../components/Shared/Ui/Camera/Toolbar';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

interface State {
    captures: any[];
    flashMode: string;
    capturing: any;
    cameraType: string;
    hasCameraPermissions: boolean | any;
}

class CameraView extends React.PureComponent {
    camera: any = null;

    state: State = {
        captures: [],
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        cameraType: Camera.Constants.Type.back,
        hasCameraPermissions: null
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermissions = camera.status === 'granted';

        this.setState({ hasCameraPermissions });
    }

    setFlashMode = () => {
        this.setState((prevState: State) => ({
            ...prevState,
            flashMode: prevState.flashMode === Camera.Constants.FlashMode.off ?
                Camera.Constants.FlashMode.on :
                Camera.Constants.FlashMode.off
        }));
    };

    setCameraType = () => {
        this.setState((prevState: State) => ({
            ...prevState,
            cameraType: prevState.cameraType === Camera.Constants.Type.back ?
                Camera.Constants.Type.front : Camera.Constants.Type.back
        }));
    }


    render() {
        const { hasCameraPermissions } = this.state;

        if (hasCameraPermissions === null) {
            return <View/>
        } else if (hasCameraPermissions === false) {
            return <View><Text>Access to camera has been denied</Text></View>
        }
        return (
            <View style={styles.preview}>
                <Camera
                    style={styles.preview}
                    ref={(camera: any) => this.camera = camera}
                />
                <Toolbar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    }
})

export default CameraView;