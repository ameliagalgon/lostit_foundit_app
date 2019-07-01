import { Firebase } from "../integrations/firebase";

export default class AuthService{

    /**
     * Login with Email and Password
     * https://medium.com/datadriveninvestor/facebook-login-with-react-native-expo-firebase-and-typescript-56df4ed6099a
     */
    public static async loginWithEmailAndPass(email: string, pass:string) {
        await Firebase.auth().signInWithEmailAndPassword(email, pass).then((user) => {
            if (user) {
                console.log('user signed in');
            }
        }).catch(e => console.log(e.message));
    }

    public static async logout() {
        await Firebase.auth().signOut();
    }

    /**
     * Register a subscription callback for changes of the currently authenticated user
     *
     * @param callback Called with the current authenticated user as first argument
     */
    public static subscribeAuthChange(callback: (user: firebase.User | null) => void) {
        Firebase.auth().onAuthStateChanged(callback);
    }
}