import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Header } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import ButtonDefault from "../components/Shared/Ui/ButtonDefault";

import { openModal, closeModal } from "../store/Modals/actionCreators";
import { connect } from "react-redux";
import { AppState } from "../store/types";
import { isModalOpen } from "../store/Modals/selectors";
// import Modal from '../components/Shared/Modals/Modal';

import { ROUTES } from "../store/constants";
import {getUser} from "../store/Auth/selectors";

interface Props {
    isLostOpen: boolean;
    isFoundOpen: boolean;
    openModal: (name: string, params: any) => void;
    closeModal: () => void;
    currentUser: any;
}

const LOST_ITEM_FORM = "Lost item form";
const FOUND_ITEM_FORM = "Found item form";
type FinalProps = NavigationScreenProps & Props;

class HomeScreen extends React.PureComponent<FinalProps> {
    static navigationOptions = {
        header: null,
    };

    state = {
        // user: null,
        items: [],
        loading: true,
        error: false,
    };

    componentDidUpdate() {
        if (this.props.currentUser) {
            this.setState({
                loading: false,
                error: false
            })
        }
    }

    handleToggleLostForm = () => {
        this.props.navigation.navigate(ROUTES.LostForm);
    }

    handleToggleFoundForm = () => {
        this.props.navigation.navigate(ROUTES.FoundForm, {currentUser: this.props.currentUser});
    }

    render() {
        const { loading, error } = this.state;
        console.log(this.props.currentUser);
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Lost it? Found it!', style: { color: '#fff' } }}
                />
                <View style={styles.content}>
                    {loading && <ActivityIndicator size={'large'}/>}
                    {error && <Text>Error...</Text>}
                    {!loading && !error &&
                    <View>
                        {this.props.currentUser.email &&
                            <Text>Hi, {this.props.currentUser.email}</Text>
                        }
                        <ButtonDefault title={"Lost something"} handleClick={this.handleToggleLostForm}/>
                        <ButtonDefault title={"Found something"} handleClick={this.handleToggleFoundForm}/>
                        <ButtonDefault title={"My Lost items"} handleClick={() => this.props.navigation.navigate(ROUTES.LostItems)}/>
                    </View>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = (state: AppState) => ({
    isLostOpen: isModalOpen(state, {name: LOST_ITEM_FORM}),
    isFoundOpen: isModalOpen(state, {name: FOUND_ITEM_FORM}),
    currentUser: getUser(state),
});

const mapDispatchToProps = {
    openModal,
    closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);