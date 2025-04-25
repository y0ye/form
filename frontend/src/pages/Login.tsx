import classes from '@/styles/login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import {
    setCurrentUser,
    setAuth,
} from '@/context/state.tsx';

export default function Login() {
    const [user, SetUsername] = useState<string>('');
    const [pass, SetPassword] = useState<string>('')
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user,
                    password: pass
                })
            });

            if (!res.ok) {
                throw new Error('Login Failed')
            }
            const data = await res.json();
            console.log(data); // You can store the token here
            setCurrentUser(user);
            setAuth(true);
            navigate('/');

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <div className={classes.container_left}>
                    <div className={classes.login_top}>
                        <h1 className={classes.poppins_regular}>Welcome back</h1>
                        <h2 className={classes.poppins_light}>Login to your account</h2>
                    </div>
                    <form className={classes.login_middle} onSubmit={handleLogin}>
                        <div className={classes.usernameInput}>
                            <p className={classes.poppins_light} >Email</p>
                            <input className={classes.poppins_light}
                                placeholder='Username'
                                type='text'
                                value={user}
                                onChange={(e) => SetUsername(e.target.value)}
                            />
                        </div>
                        <div className={classes.passwordInput}>
                            <div className={classes.inlinePassText}>
                                <span className={classes.poppins_light} >Password</span>
                                <a className={classes.poppins_extralight} href='https://google.com'>Forgot your Password?</a>
                            </div>
                            <input className={classes.poppins_light}
                                type='password'
                                value={pass}
                                onChange={(e) => SetPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={classes.poppins_light}>Login</button>
                    </form>
                    <div className={classes.login_bottom}>
                        <p className={classes.poppins_extralight}>———|  Or continue with  |———</p>
                        <div className={classes.inlineAuthButtons}>
                            <button> <img /> </button>
                            <button> <img /> </button>
                            <button> <img /> </button>
                        </div>
                        <div className={classes.bottom_text}>
                            <p className={classes.poppins_light}>
                                Don't have an account?
                            </p>
                            <p className={classes.poppins_extralight}><a href='Signup'>Sign up</a></p>
                        </div>
                    </div>
                </div>
                <div className={classes.container_right}>
                    <img src='./src/assets/KAT.png' />
                </div>
            </div>
        </div>
    )
}