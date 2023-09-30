import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="loginTitle">SocialMedia</h1>
                    <p className="tagline">This is the tag line of SocialMedia</p>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <div class="form__group field">
                            <input type="email" class="form__field" placeholder="Email" required="" />
                                <label for="name" class="form__label">Email Address</label>
                        </div>
                        <div class="form__group field">
                            <input type="password" class="form__field" placeholder="Email" required="" />
                            <label for="name" class="form__label">Password</label>
                        </div>
                        <button className="loginBtn seeMoreBtn">Log in</button>
                        <span className="forgetPassword">Forget password</span>
                        <button className="signupBtn seeMoreBtn">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
