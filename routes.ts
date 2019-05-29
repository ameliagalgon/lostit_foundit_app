import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { ROUTES } from "./constants/routes";

const RootStack = createStackNavigator({
    [ROUTES.Home]: { screen: HomeScreen },
    [ROUTES.Login]: { screen: LoginScreen },
    [ROUTES.Signup]: { screen: SignupScreen },
}, {
    initialRouteName: ROUTES.Home,
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;