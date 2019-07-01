import React from 'react';
import { connect } from 'react-redux'
import AppContainer from '../routes';
import AuthService from '../services/Auth';
import { setUser } from "../store/Auth/actionCreators";

interface Props {
    setUser: (user: any) => void;
}

class App extends React.PureComponent<Props>{

    componentDidMount() {
        AuthService.subscribeAuthChange(user => {
            this.props.setUser(user);
        });
    }

    render() {
        return <AppContainer/>;
    }
}

const mapDispatchToProps = {
    setUser
};

export default connect(null, mapDispatchToProps)(App);