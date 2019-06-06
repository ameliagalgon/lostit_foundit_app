import React from 'react';
import { View, Text } from 'react-native';
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

interface Props {
    handleNext: () => void;
    handleClose: () => void;
}

const CompleteFoundItemForm: React.FunctionComponent<Props> = ({ handleNext, handleClose }) => (
    <View>
        <Text>Thank you!</Text>
        <Text>Someone will contact you if they want to retrieve the item</Text>
        <ButtonDefault title={"Found another item"} handleClick={handleNext}/>
        <ButtonDefault title={"Close"} handleClick={handleClose}/>
    </View>
);

export default CompleteFoundItemForm;