import { useRef } from "react";
import "./login.css"

export default function Login() {

    const email = useRef();
    const password = useRef();

    function loginHandler(e) {
        e.preventDefault()
        console.log("loginHandler working");
        console.log(email.current.value);
        // console.log(password.current.value);
    }

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
                        <button className="loginBtn seeMoreBtn" >Log in</button>
                        <span className="forgetPassword">Forget password</span>
                        <button className="signupBtn seeMoreBtn">Create new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
