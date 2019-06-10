import React from 'react';
import {View, StyleSheet} from 'react-native';
import InitialLostItemForm from "../components/Forms/LostItem/InitialLostItemForm";
import DateAndTimeLostItemForm from "../components/Forms/LostItem/DateAndTimeLostItemForm";

interface Props {

}

interface State {
    stage: number;
}

enum LostItemFormStages {
    INITIAL,
    DATEANDTIME,
}

class LostItemForm extends React.PureComponent<Props, State> {
    state = {
        stage: LostItemFormStages.INITIAL
    };

    render() {
        const { stage } = this.state;
        return (
            <View style={styles.container}>
                {stage === LostItemFormStages.INITIAL &&
                    <InitialLostItemForm/>
                }
                {stage === LostItemFormStages.DATEANDTIME &&
                    <DateAndTimeLostItemForm/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LostItemForm;