import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProps } from "react-navigation";
import ButtonDefault from "../components/Ui/ButtonDefault";

interface Props {

}

type FinalProps = NavigationScreenProps & Props;

class HomeScreen extends React.PureComponent<FinalProps> {
    handleGoToLostForm = () => {
        console.log("Lost item");
    }

    handleGoToFoundForm = () => {
        console.log("Found item");
    }

    render() {
        const { navigation: {state: { params } } } = this.props;
        return (
            <View>
                {params && params.user &&
                    <Text>Hi, {params.user.firstName}</Text>
                }
                <ButtonDefault title={"Lost something"} handleClick={this.handleGoToLostForm}/>
                <ButtonDefault title={"Found something"} handleClick={this.handleGoToFoundForm}/>
            </View>
        )
    }
}

export default HomeScreen;