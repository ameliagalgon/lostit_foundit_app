import React from 'react';
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import ButtonDefault from "../../Shared/Ui/ButtonDefault";
// import {Photo} from "../../../store/Camera/types";
import { Image } from "react-native";

interface Props {
    handleOpenCamera: () => void;
    handleNext: () => void;
    photo: any;
}

const InitialFoundItemForm: React.FunctionComponent<Props> = ({ handleNext, handleOpenCamera, photo }) => (
    <View>
        <Text>Thank you for reporting a found item!</Text>
        <Input label={"Name of item"}/>
        <Text>Do you want to take a photo?</Text>
        {photo && <Image source={photo.uri} style={{width: 100, height: 100}}/>}
        <ButtonDefault title={"Take a photo"} handleClick={handleOpenCamera}/>
        <ButtonDefault title={"Next"} handleClick={handleNext} />
    </View>
);

export default InitialFoundItemForm;