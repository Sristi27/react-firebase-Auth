import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth'
import React,{Component} from 'react'



var firebaseConfig = {
  apiKey: "AIzaSyC5ZF1j4246mF0QV4nBUBw-GKWCj5kSRvM",
  authDomain: "officeeats-5e902.firebaseapp.com",
  projectId: "officeeats-5e902",
  storageBucket: "officeeats-5e902.appspot.com",
  messagingSenderId: "760148116792",
  appId: "1:760148116792:web:2583178287ec089718adcd",
  measurementId: "G-7PQDWX07B5"
};


// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);



class App extends Component {

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);