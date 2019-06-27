import React from 'react';
import {View, Text, StyleSheet, Alert, Image} from 'react-native';
import Input from '../../Shared/Ui/Input';
import ButtonDefault from "../../Shared/Ui/ButtonDefault";

import { Constants, ImagePicker, Permissions } from "expo";

interface Props {
    handleNext: () => void;
}

interface State {
    image: any;
}

class DescriptionLostItemForm extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            image: null
        };
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if(Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                Alert.alert(
                    'Title',
                    'Message',
                    [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},]
                )
            }
        }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        console.log(result);

        if(!result.cancelled) {
            this.setState({
                image: result.uri
            });
        }
    }

    render() {
        const { image } = this.state;
        return (
            <View style={styles.container}>
                <Text>Please provide some information on the item you lost</Text>
                <Input placeholder={"Name of item"}/>
                <Input placeholder={"Description"}/>
                <Text>Do you have an image of the item to upload?</Text>
                {image && <Image source={{uri: image}} style={{ width: 200, height: 200}}/>}
                <ButtonDefault title={"Import image"} handleClick={this.pickImage}/>
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

export default DescriptionLostItemForm;