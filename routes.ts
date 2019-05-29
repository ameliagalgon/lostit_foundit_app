import { createAppContainer, createStackNavigator } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import { ROUTES } from "./store/constants/routes";

const RootStack = createStackNavigator({
    [ROUTES.Welcome]: { screen: WelcomeScreen },
    [ROUTES.Login]: { screen: LoginScreen },
    [ROUTES.Signup]: { screen: SignupScreen },
    [ROUTES.HomePage]: { screen: HomeScreen },
}, {
    initialRouteName: ROUTES.Welcome,
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;