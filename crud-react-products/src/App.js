import React from 'react';
import './App.css';
import './index.css';
import Products from './components/Products';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // const [user, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailerror]= useState('');
  // const [hasAccount, setHasAcoount] = useState('');
  return (
    <div className="container p-4">

        <Products/>
      <ToastContainer/>
    </div>
  );
}

export default App;
