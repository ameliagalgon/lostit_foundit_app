import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from "react-native";
import {ListItem} from "react-native-elements";
import {fetchItems} from "../utils/api";

interface Props {

}

interface State {
    loading: boolean;
    error: boolean;
    items: any[];
}

class MyLostItems extends React.PureComponent<Props, State> {

    state = {
        loading: true,
        error: false,
        items: []
    };

    componentDidMount() {
        this.getMyLostItems().then(() => {
            console.log(this.state.items);
        });
    }

    getMyLostItems = async () => {
        try {
            const items = await fetchItems();
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

    render() {
        const { loading, items } = this.state;
        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size={'large'}/>}
                {!loading &&
                    <View>
                        <Text>My Lost Items</Text>
                        <View>{
                            items.map((item: any, i) => (
                                <ListItem key={i} title={item.name}/>
                            ))
                        }</View>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    }
});

export default MyLostItems;