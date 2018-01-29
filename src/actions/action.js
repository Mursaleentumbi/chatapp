import ActionTypes from '../constant/constant';
import firebase from 'firebase';
import history from '../history'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBNItmtdOiOQjXz8a1RBoByoZanYK15_zk",
    authDomain: "chat-app-f3aa3.firebaseapp.com",
    databaseURL: "https://chat-app-f3aa3.firebaseio.com",
    projectId: "chat-app-f3aa3",
    storageBucket: "chat-app-f3aa3.appspot.com",
    messagingSenderId: "634815247991"
};
firebase.initializeApp(config);

export function signupAction(user) {
    console.log(user)
    return dispatch => {

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                dispatch({ type: ActionTypes.ISLOADING, payload: true })
                dispatch({ type: ActionTypes.LOADING, payload: "Please Wait...." })


                console.log('Signed Up: ' + createdUser);

                delete user.password;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user);
                dispatch({ type: ActionTypes.CURRENTUSERDATA, payload: user })


                setTimeout(() => {
                    dispatch({ type: ActionTypes.ISLOADING, payload: false })
                    history.push('/signin')
                }, 1500)
            })
            .catch(function (error) {
                dispatch({ type: ActionTypes.ISLOADING, payload: true })
                dispatch({ type: ActionTypes.LOADING, payload: "Please Wait...." })
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                dispatch({ type: ActionTypes.SIGNUPERRORSTATE, payload: true })
                dispatch({ type: ActionTypes.SIGNUPERROR, payload: error.message })
                // ...

                setTimeout(() => {
                    dispatch({ type: ActionTypes.SIGNUPERRORSTATE, payload: false })
                dispatch({ type: ActionTypes.ISLOADING, payload: false })
                    
                }, 1500)

            })

    }
}

export function signinAction(user) {
    console.log(user)
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signin) => {
                dispatch({ type: ActionTypes.ISLOADING, payload: true })
                dispatch({ type: ActionTypes.LOADING, payload: "Please Wait...." })

                console.log('Signed in: ' + signin);

                setTimeout(() => {
                    dispatch({ type: ActionTypes.ISLOADING, payload: false })
                    history.push('/chat')
                }, 1500)

            })

            .catch(function (error) {
                dispatch({ type: ActionTypes.ISLOADING, payload: true })
                dispatch({ type: ActionTypes.LOADING, payload: "Please Wait...." })
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                dispatch({ type: ActionTypes.SIGNINERRORSTATE, payload: true })
                dispatch({ type: ActionTypes.SIGNINERROR, payload: error.message })

                setTimeout(() => {
                    dispatch({ type: ActionTypes.SIGNINERRORSTATE, payload: false })
                    dispatch({ type: ActionTypes.ISLOADING, payload: false })

                }, 1500)

            });
    }
}