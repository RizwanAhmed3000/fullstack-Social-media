import "./signup.css"

export default function Signup() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="loginTitle">SocialMedia</h1>
                    <p className="tagline">This is the tag line of SocialMedia</p>
                </div>
                <div className="loginRight">
                    <div className="loginBox signupBox">
                        <div class="form__group field">
                            <input type="text" class="form__field" placeholder="First Name" required="" />
                            <label for="name" class="form__label">First Name</label>
                        </div>
                        <div class="form__group field">
                            <input type="text" class="form__field" placeholder="Last Name" required="" />
                            <label for="name" class="form__label">Last Name</label>
                        </div>
                        <div class="form__group field">
                            <input type="email" class="form__field" placeholder="Email" required="" />
                            <label for="name" class="form__label">Email Address</label>
                        </div>
                        <div class="form__group field">
                            <input type="password" class="form__field" placeholder="Email" required="" />
                            <label for="name" class="form__label">Password</label>
                        </div>
                        <button className="loginBtn seeMoreBtn">Sign up</button>
                        <button className="signupBtn seeMoreBtn">Log in to your account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
