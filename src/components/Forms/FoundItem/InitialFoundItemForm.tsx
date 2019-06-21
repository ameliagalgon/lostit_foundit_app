import React from 'react';
import {Alert, Text, View} from "react-native";
import ButtonDefault from "../../Shared/Ui/ButtonDefault";
import { Location, Permissions } from "expo";

type LocationData = Location.LocationData;

interface Props {
    handleGoToDescription: () => void;
    handleNext: () => void;
}

interface State {
    location: LocationData | any;
    timestamp: number;
}

class InitialFoundItemForm extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            location: null,
            timestamp: 0,
        };
    }

    getCurrentLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({accuracy: 5});
            this.setState({
                location,
                timestamp: location.timestamp
            }, this.props.handleGoToDescription); // go to new stage after getting location
        } else {
            Alert.alert(
                'Alert',
                'You do not have location permissions',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed')
                    },
                ],
                {
                    cancelable: false
                },
            );
        }
    };

    render() {
        const { handleNext } = this.props;
        return (
            <View>
                <Text>Thank you for reporting a found item!</Text>
                <ButtonDefault title={"Record current location and time"} handleClick={this.getCurrentLocationAsync}/>
                <ButtonDefault title={"Manually input location and time"} handleClick={handleNext}/>
            </View>
        );
    }
}

export default InitialFoundItemForm;