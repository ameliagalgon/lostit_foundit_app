import React from 'react';
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

interface Props {
    handleOpenCamera: () => void;
    handleNext: () => void;
}

const InitialFoundItemForm: React.FunctionComponent<Props> = ({ handleNext, handleOpenCamera }) => (
    <View>
        <Text>Thank you for reporting a found item!</Text>
        <Input label={"Name of item"}/>
        <Text>Do you want to take a photo?</Text>
        <ButtonDefault title={"Take a photo"} handleClick={handleOpenCamera}/>
        <ButtonDefault title={"Next"} handleClick={handleNext} />
    </View>
);

export default InitialFoundItemForm;