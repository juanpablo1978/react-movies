import React, {useState} from 'react';
import {
    emptyFieldEmail,
    emailField,
    passwordField,
} from "../helpers/formValidations";
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const URL = "https://fake-login-api-production.up.railway.app/api/auth/login";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: {msg: "", status: false},
        password: {msg: "", status: false},
    });

    const handleEmail = (e) => {
        setEmail(e.target.value.trim());
        emptyFieldEmail(e.target.value.trim(),setErrors);
        emailField(e.target.value.trim(),setErrors);

    };

    const handlePassword = (e) => {
        setPassword(e.target.value.trim());
        passwordField(e.target.value.trim(),setErrors);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        emptyFieldEmail(e.target[0].value.trim(),setErrors);
        emailField(e.target[0].value.trim(),setErrors);
        passwordField(e.target[1].value.trim(),setErrors);

        if(!e.target[0].value.trim().length) return;

        if(!errors.email.status && !errors.password.status) {
            const response = await fetch (URL, {
                method: "POST",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-type": "application/json",
                }
            });
            const data = await response.json();
            console.log(data);

            if(data.ok){
                dispatch(login(data.user));
                navigate('/home');
            }
        }
    };


   return (

    <main className='bg-slate-900 min-h-screen flex justify-center items-center flex-col p-4'>
        <h1 className='mb-4 text-2xl text-white font-semibold'>
            Wellcome to React Movies
        </h1>
        <form className='h-80 w-80 bg-slate-800 rounded-xl shadow-md p-6'
              onSubmit={handleSubmit}>
            <div className='flex flex-col my-6'>
                <div className='bg-slate-50 h-10 rounded-lg flex items-center px-4'>
                <input 
                 name='email'
                 value={email}
                 onChange={handleEmail}
                 placeholder='Your email' 
                 className='outline-none w-full'/>
                </div>
                {errors.email.status && (
                    <span className='pt-1 text-red-600'>{errors.email.msg}</span>
                )}
            </div>
            <div className='flex flex-col my-6'>
        <div className='bg-slate-50 h-10 rounded-lg flex items-center px-4'>
           <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handlePassword}
                    placeholder='Your password' 
                    className='outline-none'/>
        </div>
                {errors.password.status && (
                    <span className='pt-1 text-red-600'>{errors.password.msg}</span>
                )}
        </div>
            <button className='w-full bg-fuchsia-600 h-9 rounded-lg text-slate-900 font-semibold mt-8'>
                    Login
                </button> 
        </form>
    </main>
  );
};


export default LoginPage
