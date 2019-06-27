import * as firebase from 'firebase'

class Fire {
    constructor() {
        this.init();
        this.observeAuth();
    }

    observeAuth = () => {
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    };

    onAuthStateChanged = user => {
        if (!user) {
            try {
                // 4.
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };

    init = () => {
        const firebaseConfig = {
            apiKey: "AIzaSyBApdw8pYoD9I3J2leJL__r-jkQm8s3qwU",
            authDomain: "lostitfoundit-8ace5.firebaseapp.com",
            databaseURL: "https://lostitfoundit-8ace5.firebaseio.com",
            projectId: "lostitfoundit-8ace5",
            storageBucket: "lostitfoundit-8ace5.appspot.com",
            messagingSenderId: "236304532804",
            appId: "1:236304532804:web:c9f9636aa375ab0a"
        };

        firebase.initializeApp(firebaseConfig);
    };

    signUp = async (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    signin = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password);
            firebase.auth().onAuthStateChanged(user => {
                alert(user.email);
            })
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    // 1.
    get ref() {
        return firebase.database().ref('messages');
    }
// 2.
    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));
// 3.
    parse = snapshot => {
    }
// 4.
    off() {
        this.ref.off();
    }

    parse = snapshot => {
        // 1.
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        // 2.
        const timestamp = new Date(numberStamp);
        // 3.
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };

    // 1.
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
// 2.
    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

// 3.
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            // 4.
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };
// 5.
    append = message => this.ref.push(message);
}

Fire.shared = new Fire();
export default Fire;