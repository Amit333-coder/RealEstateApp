import "./navbar.scss"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="left">
                <a className="logo" href="/">
                <img src="/logo.png" alt="logo" />
                <span>Real Estate</span>
                </a>

                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/" className="Si">Sign in</a>
                <a href="/" className="Su">Sign up</a>
            </div>

        </nav>
    )
}

export default Navbar