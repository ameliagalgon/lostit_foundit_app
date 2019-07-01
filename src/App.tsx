import React from 'react';
import { Provider } from 'react-redux'
import AppContainer from './containers/App';

import configureStore from './store/configureStore';
const store = configureStore({});

class App extends React.PureComponent<{}>{

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
