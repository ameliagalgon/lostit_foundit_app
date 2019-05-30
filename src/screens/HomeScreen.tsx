import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProps } from "react-navigation";

interface Props {

}

type FinalProps = NavigationScreenProps & Props;

class HomeScreen extends React.PureComponent<FinalProps> {
    render() {
        const { navigation: {state: { params } } } = this.props;
        return (
            <View>
                {params && params.user &&
                    <Text>Hi, {params.user.firstName}</Text>
                }
            </View>
        )
    }
}

export default HomeScreen;