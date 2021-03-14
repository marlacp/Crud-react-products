import React, {useState, useEffect} from 'react';
import './App.css';
import './index.css';
import Login from './components/Login';
import Hero from './components/Hero';
import 'react-toastify/dist/ReactToastify.css';
// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';
import * as firebase from 'firebase';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailerror]= useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAcoount] = useState('');
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailerror('');
    setPassword('');
  };
  const handleLogin = () => {
    clearErrors();
    firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .catch((err) => {
       // eslint-disable-next-line default-case
       switch (err.code) {
         case "auth/invalid-email":
           case "auth/user-disabled":
             case "auth/user-not-found":
               setEmailerror(err.message);
               break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
       }
     });
  };

  const handleSignup = () =>{
    clearErrors();
    firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .catch((err) => {
       // eslint-disable-next-line default-case
       switch (err.code) {
         case "auth/email-already-in-use":
           case "auth/invalid-email":
              setEmailerror(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
       }
     });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      clearInputs();
      if (user) {
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
      <Login
        email= {email}
        setEmail= {setEmail}
        password= {password}
        setPassword= {setPassword}
        handleLogin= {handleLogin}
        handleSignup= {handleSignup}
        hasAccount= {hasAccount}
        setHasAcoount= {setHasAcoount}
        emailError = {emailError}
        passwordError= {passwordError}
      />
      )}
      
    </div>

  );
}

export default App;
