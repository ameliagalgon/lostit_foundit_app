import React from 'react';
import {View, Text, ImageURISource, Image} from 'react-native';
import Input from '../../Shared/Ui/Input';
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

interface Props {
    handleNext: () => void;
    handleOpenCamera: () => void;
    photo?: ImageURISource
}

const FoundItemDescriptionForm: React.FunctionComponent<Props> = ({ handleNext, handleOpenCamera, photo }) => (
    <View>
        <Input placeholder={"Name of item"}/>
        <Text>Please provide a description to help others identify their item</Text>
        <Input placeholder={'Description'}/>
        <Text>Do you want to take a photo?</Text>
        {photo && <Image source={photo} style={{ width: 200, height: 250}}/>}
        <ButtonDefault title={"Take a photo"} handleClick={handleOpenCamera}/>
        <ButtonDefault title={'Save'} handleClick={handleNext}/>
    </View>
);

export default FoundItemDescriptionForm;