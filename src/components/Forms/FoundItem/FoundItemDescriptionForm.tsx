import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../Shared/Ui/Input';
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

interface Props {
    handleNext: () => void;
}

const FoundItemDescriptionForm: React.FunctionComponent<Props> = ({ handleNext }) => (
    <View>
        <Text>Please provide a description to help others identify their item</Text>
        <Input placeholder={'Description'}/>
        <ButtonDefault title={'Save'} handleClick={handleNext}/>
    </View>
);

export default FoundItemDescriptionForm;