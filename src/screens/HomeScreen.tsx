import React from 'react';
// import { delay } from 'redux-saga';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from "react-navigation";
import ButtonDefault from "../components/Ui/ButtonDefault";

interface Props {

}

type FinalProps = NavigationScreenProps & Props;

class HomeScreen extends React.PureComponent<FinalProps> {
    state = {
        loading: true
    };

    async componentDidMount() {
        try {
            this.setState({
                loading: false
            });
        } catch (e) {
            console.log(e);
        }
    }

    handleGoToLostForm = () => {
        console.log("Lost item");
    }

    handleGoToFoundForm = () => {
        console.log("Found item");
    }

    render() {
        const { navigation: {state: { params } } } = this.props;
        const { loading } = this.state;
        return (
            <View>
                {loading && <ActivityIndicator size={'large'}/>}
                {!loading &&
                <View>
                    {params && params.user &&
                    <Text>Hi, {params.user.firstName}</Text>
                    }
                    <ButtonDefault title={"Lost something"} handleClick={this.handleGoToLostForm}/>
                    <ButtonDefault title={"Found something"} handleClick={this.handleGoToFoundForm}/>
                </View>
                }
            </View>
        )
    }
}

export default HomeScreen;