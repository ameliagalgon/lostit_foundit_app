import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Header, ListItem } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import ButtonDefault from "../components/Shared/Ui/ButtonDefault";

import { fetchItems } from '../utils/api';
import { openModal, closeModal } from "../store/Modals/actionCreators";
import { connect } from "react-redux";
import { AppState } from "../store/types";
import { isModalOpen } from "../store/Modals/selectors";
import Modal from '../components/Shared/Modals/Modal';
import FoundItemForm from "../containers/Forms/FoundItemForm";
import LostItemForm from "../containers/Forms/LostItemForm";

interface Props {
    isLostOpen: boolean;
    isFoundOpen: boolean;
    openModal: (name: string, params: any) => void;
    closeModal: () => void;
}

const LOST_ITEM_FORM = "Lost item form";
const FOUND_ITEM_FORM = "Found item form";
type FinalProps = NavigationScreenProps & Props;

class HomeScreen extends React.PureComponent<FinalProps> {
    static navigationOptions = {
        header: null,
    };

    state = {
        items: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const items = await fetchItems();
            console.log(items);
            this.setState({
                items,
                loading: false,
                error: false
            });
        } catch (e) {
            this.setState({
                loading: false,
                error: true
            });
        }
    }

    handleToggleLostForm = () => {
        if (this.props.isLostOpen || this.props.isFoundOpen) {
            this.props.closeModal();
        } else {
            this.props.openModal(LOST_ITEM_FORM, {})
        }
    }

    handleToggleFoundForm = () => {
        if (this.props.isLostOpen || this.props.isFoundOpen) {
            this.props.closeModal();
        } else {
            this.props.openModal(FOUND_ITEM_FORM, {})
        }
    }

    render() {
        const { navigation: {state: { params } } } = this.props;
        const { loading, items, error } = this.state;

        const foundBody = (
            <FoundItemForm
                handleToggle={this.handleToggleFoundForm}
                navigation={this.props.navigation}
            />
        );

        const lostBody = (
            <LostItemForm/>
        );

        return (
            <View style={styles.container}>
                <Modal
                    isOpen={this.props.isLostOpen}
                    body={lostBody}
                    title={"Lost item"}
                    handleClose={this.props.closeModal}
                />
                <Modal
                    isOpen={this.props.isFoundOpen}
                    handleClose={this.props.closeModal}
                    title={"Found item"}
                    body={foundBody}
                />
                <Header
                    centerComponent={{ text: 'Lost it? Found it!', style: { color: '#fff' } }}
                />
                <View style={styles.content}>
                    {loading && <ActivityIndicator size={'large'}/>}
                    {error && <Text>Error...</Text>}
                    {!loading && !error &&
                    <View>
                        {params && params.user &&
                        <Text>Hi, {params.user.firstName}</Text>
                        }
                        <ButtonDefault title={"Lost something"} handleClick={this.handleToggleLostForm}/>
                        <ButtonDefault title={"Found something"} handleClick={this.handleToggleFoundForm}/>
                        <View>{
                            items.map((item: any, i) => (
                                <ListItem
                                    key={i}
                                    title={item.name}
                                />
                            ))
                        }</View>
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
    isFoundOpen: isModalOpen(state, {name: FOUND_ITEM_FORM})
});

const mapDispatchToProps = {
    openModal,
    closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);