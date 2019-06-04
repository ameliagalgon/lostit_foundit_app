import { createAppContainer, createStackNavigator } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import { ROUTES } from './store/constants';

const RootStack = createStackNavigator({
    [ROUTES.Welcome]: {
        screen: WelcomeScreen,
    },
    [ROUTES.Login]: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Log in'
        }
    },
    [ROUTES.Signup]: {
        screen: SignupScreen,
        navigationOptions: {
            title: 'Sign up'
        }
    },
    [ROUTES.HomePage]: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
}, {
    initialRouteName: ROUTES.Welcome,
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;