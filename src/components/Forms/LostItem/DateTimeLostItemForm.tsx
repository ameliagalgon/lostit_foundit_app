import React from "react";
import {View, Text, StyleSheet} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import ButtonDefault from "../../Shared/Ui/ButtonDefault";
import DatePicker from "../../Shared/Ui/DatePicker";
import TimePicker from "../../Shared/Ui/TimePicker";

interface Props {
    handleNext: () => void
}

interface State {
    isDatePickerVisible: boolean;
    isTimePickerVisible: boolean;
}

class DateTimeLostItemForm extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isTimePickerVisible: false,
        };
    }

    showDatePicker = () => {
        this.setState(prevState => ({
            ...prevState,
            isDatePickerVisible: true
        }));
    }

    showTimePicker = () => {
        this.setState(prevState => ({
            ...prevState,
            isTimePickerVisible: true
        }));
    }

    hideDateTimePicker = () => {
        this.setState({
            isDatePickerVisible: false,
            isTimePickerVisible: false,
        });
    }

    handleDatePicked = (date: Date) => {
        console.log(`A date has been picked: ${date}`);
        this.hideDateTimePicker();
    }

    handleTimePicked = (time: Date) => {
        console.log(`A time has been picked: ${time}`);
        this.hideDateTimePicker();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Set the date and time</Text>
                <DatePicker/>
                <TimePicker/>
                <ButtonDefault title={"Next"} handleClick={this.props.handleNext}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default DateTimeLostItemForm;