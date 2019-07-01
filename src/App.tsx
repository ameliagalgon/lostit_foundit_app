import React from 'react';
import { Provider } from 'react-redux'
import AppContainer from './routes';
import AuthService from './services/Auth';
import { setUser } from "./store/Auth/actionCreators";

interface State {
    user: firebase.User | null;
}

import configureStore from './store/configureStore';
const store = configureStore({});

class App extends React.PureComponent<{}, State>{
    state: State = {
        user: null
    };

    componentDidMount() {
        AuthService.subscribeAuthChange(user => {
            this.setState({ user }, () => setUser(this.state.user));
        });
    }



    render() {
        // const { currentUser } = this.props;
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}

export default App;
