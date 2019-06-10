import React from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import ButtonDefault from "../../Shared/Ui/ButtonDefault";
import { Location, Permissions } from "expo";

type LocationData = Location.LocationData;

interface Props {

}

interface State {
    location: LocationData | any;
    timestamp: number;
}

class InitialLostItemForm extends React.PureComponent<Props, State> {

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
            }, () => console.log(this.state.location));
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
        return (
            <View style={styles.container}>
                <Text>Would you like to record to current time and location for the lost item?</Text>
                <ButtonDefault title={"Yes"} handleClick={this.getCurrentLocationAsync}/>
                <ButtonDefault title={"No. Record different time and location"} handleClick={() => {}}/>
                {this.state.location &&
                    <View>
                        <Text>Latitude: {this.state.location.coords.latitude}</Text>
                        <Text>Longitude: {this.state.location.coords.longitude}</Text>
                        <Text>Timestamp: {this.state.timestamp}</Text>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default InitialLostItemForm;