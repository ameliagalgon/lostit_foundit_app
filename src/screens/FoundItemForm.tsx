import * as React from 'react';
import {Image, StyleSheet, View} from "react-native";
import {connect} from "react-redux";
import {NavigationScreenProps} from "react-navigation";

import InitialFoundItemForm from "../components/Forms/FoundItem/InitialFoundItemForm";
import FoundItemDescriptionForm from '../components/Forms/FoundItem/FoundItemDescriptionForm';
import CompleteFoundItemForm from "../components/Forms/FoundItem/CompleteFoundItemForm";
import { ROUTES } from "../store/constants";
import {AppState} from "../store/types";
import {getLastPhoto} from "../store/Camera/selectors";
// import {Photo} from "../store/Camera/types";

interface OuterProps {
    handleToggle: () => void;
}

interface Props {
    itemPhoto: any;
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

    handleClose = () => {
        this.props.navigation.navigate(ROUTES.HomePage);
    }

    render() {
        return (
            <View>
                { this.state.stage === FoundItemStages.INITIAL &&
                <InitialFoundItemForm
                    handleNext={this.handleGoToNext}
                    handleOpenCamera={this.handleOpenCamera}
                    photo={this.props.itemPhoto}
                />
                }
                { this.state.stage === FoundItemStages.DESCRIPTION &&
                <FoundItemDescriptionForm
                    handleNext={this.handleGoToNext}
                />
                }
                { this.state.stage === FoundItemStages.COMPLETE &&
                <CompleteFoundItemForm
                    handleClose={this.handleClose}
                    handleNext={this.handleGoToNext}
                />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    galleryContainer: {
        bottom: 100
    },
    galleryImageContainer: {
        width: 100,
        height: 100,
        marginRight: 5
    },
    galleryImage: {
        width: 100,
        height: 100
    }
});

const mapStateToProps = (state: AppState) => ({
    itemPhoto: getLastPhoto(state)
});

export default connect(mapStateToProps)(FoundItemForm);