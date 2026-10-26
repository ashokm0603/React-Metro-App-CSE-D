import "../assets/styles/LoginStyle.css"

const Login = () => {
    return (
        <form>
            <fieldset>
                <h1>Sign-In</h1>
                <label>Username</label>
                <input type="text" placeholder="Enter UserName" />
                <br />
                <br />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" />
                <br />
                <br />
                <div id="btn">
                    <button>Login</button>
                    <button>Cancel</button>
                </div>
            </fieldset>
        </form>
    )
}
export default Login;