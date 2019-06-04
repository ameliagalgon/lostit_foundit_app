import React from 'react';
// import { delay } from 'redux-saga';
import {View, Text, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import { Header } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import ButtonDefault from "../components/Ui/ButtonDefault";

import { fetchItems } from '../utils/api';

interface Props {

}

// const keyExtractor = ({ id }: any) => id;
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

    handleGoToLostForm = () => {
        console.log("Lost item");
    }

    handleGoToFoundForm = () => {
        console.log("Found item");
    }

    renderItem = ({ item }: any) => {
        const { id, name } = item;
        return (
            <div key={id}>
                <Text>{id}</Text>
                <Text>{name}</Text>
            </div>
        );
    }

    render() {
        const { navigation: {state: { params } } } = this.props;
        const { loading, items, error } = this.state;

        console.log(loading);
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
                        {params && params.user &&
                        <Text>Hi, {params.user.firstName}</Text>
                        }
                        <ButtonDefault title={"Lost something"} handleClick={this.handleGoToLostForm}/>
                        <ButtonDefault title={"Found something"} handleClick={this.handleGoToFoundForm}/>
                        <FlatList
                            data={items}
                            // keyExtractor={keyExtractor}
                            renderItem={this.renderItem}
                        />
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

export default HomeScreen;