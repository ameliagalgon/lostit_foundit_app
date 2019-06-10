import { createAppContainer, createStackNavigator } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from "./screens/CameraScreen";
import FoundItemFormScreen from "./screens/FoundItemForm";
import LostItemFormScreen from './screens/LostItemForm';
import { ROUTES } from './store/constants';
import MyLostItems from "./screens/MyLostItems";

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
    [ROUTES.FoundForm]: {
        screen: FoundItemFormScreen,
    },
    [ROUTES.LostForm]: {
        screen: LostItemFormScreen,
    },
    [ROUTES.Camera]: {
        screen: CameraScreen,
        navigationOptions: {
            title: 'Camera'
        }
    },
    [ROUTES.LostItems]: {
        screen: MyLostItems
    }
}, {
    initialRouteName: ROUTES.Welcome,
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;