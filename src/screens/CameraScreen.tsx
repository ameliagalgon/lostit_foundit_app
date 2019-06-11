import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
// import { Col, Row, Grid } from 'react-native-easy-grid';
import {Camera, Permissions} from 'expo';

interface Props {

}

interface State {
    hasCameraPermissions: boolean | any;
    type: string;
}

class CameraScreen extends React.PureComponent<Props, State> {
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

    render() {
        const { hasCameraPermissions } = this.state;
        return (
            <View style={{flex: 1}}>
                { hasCameraPermissions === null &&
                    <Text>Has permissions is null</Text>
                }
                { hasCameraPermissions == false &&
                    <Text>No camera permissions </Text>
                }
                { hasCameraPermissions &&
                    <View style={{ flex: 1 }}>
                        <Camera
                            ref={(camera: any) => {
                                this.camera = camera
                            }}
                            style={{ flex: 1 }}
                            type={this.state.type}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'transparent',
                                    flexDirection: 'row',
                                }}>
                                <TouchableOpacity
                                    style={{
                                        flex: 0.1,
                                        alignSelf: 'flex-end',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => {
                                        this.setState({
                                            type:
                                                this.state.type === Camera.Constants.Type.back
                                                    ? Camera.Constants.Type.front
                                                    : Camera.Constants.Type.back,
                                        });
                                    }}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        flex: 0.1,
                                        alignSelf: "flex-end",
                                        alignItems: "center"
                                    }}
                                    onPress={this.snap}
                                >
                                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white'}}> Snap </Text>
                                </TouchableOpacity>
                            </View>
                        </Camera>

                    </View>
                }
            </View>
        );
    }
}

export default CameraScreen;