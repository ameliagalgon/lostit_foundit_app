import React from 'react';
import {View, StyleSheet} from 'react-native';
import InitialLostItemForm from "../components/Forms/LostItem/InitialLostItemForm";

interface Props {

}

interface State {
    stage: number;
}

enum LostItemFormStages {
    INITIAL,
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