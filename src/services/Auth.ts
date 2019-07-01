import { Firebase } from "../integrations/firebase";

export default class AuthService{

    /**
     * Login with Email and Password
     * https://medium.com/datadriveninvestor/facebook-login-with-react-native-expo-firebase-and-typescript-56df4ed6099a
     */
    public static async loginWithEmailAndPass(email: string, pass: string) {
        if (email && pass) {
            return await Firebase.auth().signInWithEmailAndPassword(email, pass).then(result => {
                return result
            }).catch(e => {return e});
        }
    }

    public static async logout() {
        await Firebase.auth().signOut();
    }

    public static async createUserWithEmailAndPass(email: string, pass: string) {
        if (email && pass) {
            await Firebase.auth().createUserWithEmailAndPassword(email, pass).then(result => {
                const user = result.user;
                console.log(user);
            }).catch(e => console.log(e.message));
        }
    }

    public static getCurrentUser() {
        return Firebase.auth().currentUser;
    }

    /**
     * Register a subscription callback for changes of the currently authenticated user
     *
     * @param callback Called with the current authenticated user as first argument
     */
    public static subscribeAuthChange(callback: (user: any) => void) {
        Firebase.auth().onAuthStateChanged(callback);
    }
}