import React from 'react';
import Moment from 'moment';
import { View } from "react-native";
import { Input } from "react-native-elements";
// import ButtonDefault from './ButtonDefault';
import DateTimePicker from "react-native-modal-datetime-picker";

interface Props {
    // isVisible: boolean;
}

interface State {
    isVisible: boolean;
    date: Date
}

class TimePicker extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isVisible: false,
            date: new Date()
        };
    }
    showDatePicker = () => {
        this.setState({
            isVisible: true
        });
    }

    hideDatePicker = () => {
        this.setState({
            isVisible: false
        });
    }

    handleDatePicked = (date: Date) => {
        this.setState({
            date,
            isVisible: false
        });
    }

    render() {
        return (
            <View>
                <Input
                    onFocus={this.showDatePicker}
                    value={Moment(this.state.date).format("LT")}
                />
                <DateTimePicker
                    mode={'time'}
                    isVisible={this.state.isVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDatePicker}
                />
            </View>
        );
    }
}

export default TimePicker;