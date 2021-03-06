import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { getAuth, sendEmailVerification } from "firebase/auth";

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        verifyEmail();
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('email sent')
            })
    }
    return (
        <div className='register-form'>
            <h2 className='register-form-head text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Enter Name' />
                <input type="email" name="email" id="" placeholder='Enter Your Email Address' required />
                <input type="password" name="password" id="" placeholder='Enter Password' required />
                <input className='submit-button' type="submit" value="Register" />
            </form>
            <p>Already Have An Account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;