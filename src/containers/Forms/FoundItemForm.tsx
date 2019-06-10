import * as React from 'react';
import { View } from "react-native";
import InitialFoundItemForm from "../../components/Forms/FoundItem/InitialFoundItemForm";
import FoundItemDescriptionForm from '../../components/Forms/FoundItem/FoundItemDescriptionForm';
import CompleteFoundItemForm from "../../components/Forms/FoundItem/CompleteFoundItemForm";
import {NavigationScreenProps} from "react-navigation";
import { ROUTES } from "../../store/constants";

interface Props {
    handleToggle: () => void;
}

interface State {
    stage: number;
    hasCameraPermissions: boolean;
}

enum FoundItemStages {
    INITIAL,
    DESCRIPTION,
    COMPLETE
}

type FinalProps = NavigationScreenProps & Props;

class FoundItemForm extends React.PureComponent<FinalProps, State> {
    static navigationOptions = {

    };

    constructor(props: FinalProps) {
        super(props);
        this.state = {
            stage: FoundItemStages.INITIAL,
            hasCameraPermissions: false
        }
    }
    handleOpenCamera = () => {
        const { navigate } = this.props.navigation;
        navigate(ROUTES.Camera)
    }

    handleGoToNext = () => {
        if (this.state.stage === FoundItemStages.INITIAL) {
            this.setState({
                stage: FoundItemStages.DESCRIPTION
            });
        } else if (this.state.stage === FoundItemStages.DESCRIPTION) {
            this.setState({
                stage: FoundItemStages.COMPLETE
            });
        } else if (this.state.stage === FoundItemStages.COMPLETE) {
            this.setState({
                stage: FoundItemStages.INITIAL
            });
        }
    }

    render() {
        return (
            <View>
                { this.state.stage === FoundItemStages.INITIAL &&
                    <InitialFoundItemForm
                        handleNext={this.handleGoToNext}
                        handleOpenCamera={this.handleOpenCamera}
                    />
                }
                { this.state.stage === FoundItemStages.DESCRIPTION &&
                    <FoundItemDescriptionForm
                        handleNext={this.handleGoToNext}
                    />
                }
                { this.state.stage === FoundItemStages.COMPLETE &&
                    <CompleteFoundItemForm
                        handleClose={this.props.handleToggle}
                        handleNext={this.handleGoToNext}
                    />
                }
            </View>
        );
    }
}

export default FoundItemForm;