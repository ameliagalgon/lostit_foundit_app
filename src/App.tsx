import React from 'react';
import { Provider } from 'react-redux'
import User from './store/Auth/models/user';
import AppContainer from './routes';

interface Props {
    currentUser?: User;
}

interface State {
    signedIn: boolean;
}

import configureStore from './store/configureStore';
const store = configureStore({});

class App extends React.PureComponent<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            signedIn: !!this.props.currentUser
        };
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
