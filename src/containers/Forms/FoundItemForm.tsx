import * as React from 'react';
import { View } from "react-native";
import InitialFoundItemForm from "../../components/Forms/FoundItem/InitialFoundItemForm";
import FoundItemDescriptionForm from '../../components/Forms/FoundItem/FoundItemDescriptionForm';
import CompleteFoundItemForm from "../../components/Forms/FoundItem/CompleteFoundItemForm";

interface Props {
    handleToggle: () => void;
}

interface State {
    stage: number;
}

enum FoundItemStages {
    INITIAL,
    DESCRIPTION,
    COMPLETE
}

class FoundItemForm extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            stage: FoundItemStages.INITIAL
        }
    }
    handleOpenCamera = () => {
        console.log("open camera");
    }

    handleGoToNext = () => {
        console.log("go to next");
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