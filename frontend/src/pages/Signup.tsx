import classes from '@/styles/signup.module.css'

export default function Signup() {
    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <div className={classes.container_left}>
                    <img src='./src/assets/KAT.png' />
                </div>
                <div className={classes.container_right}>
                    <div className={classes.login_top}>
                        <h1 className={classes.poppins_regular}>Welcome</h1>
                        <h2 className={classes.poppins_light}>Sign up for an account</h2>
                    </div>
                    <div className={classes.login_middle}>
                        <div className={classes.usernameInput}>
                            <p className={classes.poppins_light} >Email</p>
                            <input className={classes.poppins_light} type='email' placeholder='kat@gmail.com' />
                        </div>
                        <div className={classes.passwordInput}>
                            <div className={classes.inlinePassText}>
                                <span className={classes.poppins_light} >Password</span>
                            </div>
                            <input className={classes.poppins_light} type='password' />
                        </div>
                    </div>
                    <div className={classes.login_bottom}>
                        <button className={classes.poppins_light}>Sign Up</button>
                        <p className={classes.poppins_extralight}>———|  Or continue with  |———</p>
                        <div className={classes.inlineAuthButtons}>
                            <button> <img /> </button>
                            <button> <img /> </button>
                            <button> <img /> </button>
                        </div>
                        <div className={classes.bottom_text}>
                            <p className={classes.poppins_light}>
                                Already have an account?
                            </p>
                            <p className={classes.poppins_extralight}><a href='Login'>Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
