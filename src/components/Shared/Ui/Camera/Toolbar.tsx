import React from 'react';
import { Camera } from 'expo';
import { Ionicons } from "@expo/vector-icons";
import { Grid, Row, Col } from 'react-native-easy-grid';
import { View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from "react-native";

interface Props {
    capturing: boolean;
    cameraType: string;
    flashMode: string;
    setFlashMode: () => void;
    setCameraType: () => void;
    onCaptureIn: () => void;
    onCaptureOut: () => void;
    onLongCapture: () => void;
    onShortCapture: () => void;
}

const { FlashMode: CameraFlashModes } = Camera.Constants;
const Toolbar: React.FunctionComponent<Props> = ({
                                                     capturing, flashMode, setFlashMode,
                                                     setCameraType, onCaptureIn, onShortCapture
}) => {
    return (
        <Grid>
            <Row>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity
                        onPress={setFlashMode}
                    >
                        <Ionicons
                            name={flashMode === CameraFlashModes.on ? "md-flash" : "md-flash-off"}
                            color={"white"}
                            size={30}
                        />
                    </TouchableOpacity>
                </Col>
                <Col style={styles.alignCenter}>
                    <TouchableWithoutFeedback
                        onPressIn={onCaptureIn}
                        onPress={onShortCapture}
                    >
                        <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                            {capturing && <View style={styles.captureBtnInternal}/>}
                        </View>
                    </TouchableWithoutFeedback>
                </Col>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity
                        onPress={setCameraType}
                    >
                        <Ionicons
                            name={"md-reverse-camera"}
                            color={"white"}
                            size={30}
                        />
                    </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
    );
};

const styles = StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: 100%,
        position: 'absolute',
        height: 100,
        bottom: 0,
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
});

export default Toolbar;