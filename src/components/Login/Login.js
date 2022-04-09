import React from 'react';
import useFirebase from '../../hooks/useFirebase';



const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please Login</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Type your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;