import { ImageURISource } from "react-native";

export interface CameraState {
    captures: any[];
}

export interface Photo {
    height: number;
    uri: ImageURISource;
    width: number;
}