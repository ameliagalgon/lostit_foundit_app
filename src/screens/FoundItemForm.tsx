import * as React from 'react';
import { ImageURISource, View} from "react-native";
import {connect} from "react-redux";
import {NavigationScreenProps} from "react-navigation";

import InitialFoundItemForm from "../components/Forms/FoundItem/InitialFoundItemForm";
import FoundItemDescriptionForm from '../components/Forms/FoundItem/FoundItemDescriptionForm';
import CompleteFoundItemForm from "../components/Forms/FoundItem/CompleteFoundItemForm";
import DateTimeFoundItemForm from "../components/Forms/FoundItem/DateTimeFoundItemForm";
import { ROUTES } from "../store/constants";
import {AppState} from "../store/types";
import {getLastPhoto} from "../store/Camera/selectors";
import { resetCapture } from "../store/Camera/actionCreators";

interface OuterProps {
    handleToggle: () => void;
}

interface Props {
    itemPhoto: ImageURISource;
    resetCapture: () => void;
}

interface State {
    stage: number;
    hasCameraPermissions: boolean;
}

enum FoundItemStages {
    INITIAL,
    MANUAL_DATA_INPUT,
    DESCRIPTION,
    COMPLETE
}

type FinalProps = NavigationScreenProps & OuterProps & Props;

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

    handleGoToDescription = () => {
        this.setState({
            stage: FoundItemStages.DESCRIPTION
        });
    };

    handleGoToNext = () => {
        if (this.state.stage === FoundItemStages.INITIAL) {
            this.setState({
                stage: FoundItemStages.MANUAL_DATA_INPUT
            });
        } else if (this.state.stage === FoundItemStages.MANUAL_DATA_INPUT) {
            this.setState({
                stage: FoundItemStages.DESCRIPTION
            })
        } else if (this.state.stage === FoundItemStages.DESCRIPTION) {
            this.setState({
                stage: FoundItemStages.COMPLETE
            });
        } else if (this.state.stage === FoundItemStages.COMPLETE) {
            this.setState({
                stage: FoundItemStages.INITIAL
            });
        }
    };

    handleClose = () => {
        this.props.navigation.navigate(ROUTES.HomePage);
    };

    handleSave = () => {

    }

    render() {
        return (
            <View>
                { this.state.stage === FoundItemStages.INITIAL &&
                <InitialFoundItemForm
                    handleNext={this.handleGoToNext}
                    handleGoToDescription={this.handleGoToDescription}
                />
                }
                { this.state.stage === FoundItemStages.MANUAL_DATA_INPUT &&
                    <DateTimeFoundItemForm handleNext={this.handleGoToNext}/>
                }
                { this.state.stage === FoundItemStages.DESCRIPTION &&
                <FoundItemDescriptionForm
                    handleNext={this.handleGoToNext}
                    handleOpenCamera={this.handleOpenCamera}
                    photo={this.props.itemPhoto}
                />
                }
                { this.state.stage === FoundItemStages.COMPLETE &&
                <CompleteFoundItemForm
                    handleClose={this.handleClose}
                    handleNext={this.handleGoToNext}
                    handleReset={this.props.resetCapture}
                />
                }
            </View>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    itemPhoto: getLastPhoto(state)
});

const mapDispatchToProps = {
    resetCapture
};

export default connect(mapStateToProps, mapDispatchToProps)(FoundItemForm);