import { createAppContainer, createStackNavigator } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from "./screens/CameraScreen";
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
    [ROUTES.Camera]: {
        screen: CameraScreen,
        navigationOptions: {
            title: 'Camera'
        }
    },
}, {
    initialRouteName: ROUTES.Welcome,
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;