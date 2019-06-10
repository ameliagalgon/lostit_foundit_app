import React from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import ButtonDefault from "../../Shared/Ui/ButtonDefault";
import { Location, Permissions } from "expo";

type LocationData = Location.LocationData;

interface Props {

}

interface State {
    location: LocationData | any;
}

class InitialLostItemForm extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            location: null
        };
    }

    getCurrentLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({accuracy: 5});
            this.setState({location}, () => console.log(this.state.location));
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
                    <Text>{this.state.location.coords.latitude}</Text>
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