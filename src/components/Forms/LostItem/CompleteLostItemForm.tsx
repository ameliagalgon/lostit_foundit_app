import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

interface Props {
    handleNext: () => void;
    handleClose: () => void;
}

const CompleteLostItemForm: React.FunctionComponent<Props> = ({handleNext, handleClose}) => (
    <View style={styles.container}>
        <Text>Thank you for reporting a lost item</Text>
        <ButtonDefault title={"Report another lost item"} handleClick={handleNext}/>
        <ButtonDefault title={"Close"} handleClick={handleClose}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CompleteLostItemForm;