import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import {Camera, Permissions} from 'expo';

interface Props {

}

interface State {
    hasCameraPermissions: boolean | any;
    type: string;
}

class CameraScreen extends React.PureComponent<Props, State> {
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
                        <Text>WHOOOCHOfdsfdO!</Text>
                        <Camera style={{ flex: 1 }} type={this.state.type}>
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
                            </View>
                        </Camera>
                    </View>
                }
            </View>
        );
    }
}

export default CameraScreen;