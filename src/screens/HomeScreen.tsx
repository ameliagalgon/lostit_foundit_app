import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProps } from "react-navigation";

interface Props {
    name: string;
}

type FinalProps = NavigationScreenProps & Props;

class HomeScreen extends React.PureComponent<FinalProps> {
    render() {
        const { navigation: {state: { params } } } = this.props;
        return (
            <View>
                {params && params.name &&
                    <Text>Hi, {params.name}</Text>
                }
            </View>
        )
    }
}

export default HomeScreen;