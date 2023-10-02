import { useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls.js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    function loginHandler(e) {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }

    console.log(user);

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="loginTitle">SocialMedia</h1>
                    <p className="tagline">This is the tag line of SocialMedia</p>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={loginHandler}>
                        <div class="form__group field">
                            <input type="email" class="form__field" placeholder="Email" required ref={email} />
                            <label for="name" class="form__label">Email Address</label>
                        </div>
                        <div class="form__group field">
                            <input type="password" class="form__field" placeholder="Email" required minLength={8} ref={password} />
                            <label for="name" class="form__label">Password</label>
                        </div>
                        <button className="loginBtn seeMoreBtn" >{isFetching ? <CircularProgress style={{ color: "black" }} size="18px"/> : "Log in"}</button>
                        <span className="forgetPassword">Forget password</span>
                        <button className="signupBtn seeMoreBtn">Create new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
