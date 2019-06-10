import React from 'react';
import {View, StyleSheet} from 'react-native';
import InitialLostItemForm from "../components/Forms/LostItem/InitialLostItemForm";
import DateTimeLostItemForm from "../components/Forms/LostItem/DateTimeLostItemForm";
import DescriptionLostItemForm from "../components/Forms/LostItem/DescriptionLostItemForm";
import {NavigationScreenProps} from "react-navigation";
import {ROUTES} from "../store/constants";
import CompleteLostItemForm from "../components/Forms/LostItem/CompleteLostItemForm";

interface Props {

}

interface State {
    stage: number;
}

enum LostItemFormStages {
    INITIAL,
    DATETIME,
    LOCATION, // need to include location
    DESCRIPTION,
    COMPLETE
}

type FinalProps = NavigationScreenProps & Props;

class LostItemForm extends React.PureComponent<FinalProps, State> {
    state = {
        stage: LostItemFormStages.INITIAL
    };

    handleGoToNextStage = () => {
        const { stage } = this.state;
        if (stage === LostItemFormStages.INITIAL) {
            this.setState({
                stage: LostItemFormStages.DATETIME
            })
        } else if (stage === LostItemFormStages.DATETIME) {
            this.setState({
                stage: LostItemFormStages.DESCRIPTION
            });
        } else if (stage === LostItemFormStages.DESCRIPTION) {
            this.setState({
                stage: LostItemFormStages.COMPLETE
            });
        } else if (stage === LostItemFormStages.COMPLETE) {
            this.setState({
                stage: LostItemFormStages.INITIAL
            });
        }
    }

    handleGoToDescription = () => {
        this.setState({
            stage: LostItemFormStages.DESCRIPTION
        })
    }

    handleClose = () => {
        this.props.navigation.navigate(ROUTES.HomePage)
    }

    render() {
        const { stage } = this.state;
        return (
            <View style={styles.container}>
                {stage === LostItemFormStages.INITIAL &&
                    <InitialLostItemForm
                        handleGoToDescription={this.handleGoToDescription}
                        handleGoToDateTimePicker={this.handleGoToNextStage}
                    />
                }
                {stage === LostItemFormStages.DATETIME &&
                    <DateTimeLostItemForm
                        handleNext={this.handleGoToNextStage}
                    />
                }
                {stage === LostItemFormStages.DESCRIPTION &&
                    <DescriptionLostItemForm handleNext={this.handleGoToNextStage}/>
                }
                {stage === LostItemFormStages.COMPLETE &&
                    <CompleteLostItemForm
                        handleNext={this.handleGoToNextStage}
                        handleClose={this.handleClose}
                    />
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