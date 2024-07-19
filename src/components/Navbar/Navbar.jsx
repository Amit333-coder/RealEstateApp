
import { useState } from "react"
import "./navbar.scss"

function Navbar(){
    const [open,setOpen] = useState(false);
    return(
        <nav className="navbar">
            <div className="left">
                <a className="logo" href="/">
                <img src="/logo.png" alt="logo" />
                <span className="cName">Real Estate</span>
                </a>

                <a href="/" >Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/" className="Si">Sign in</a>
                <a href="/" className="Su">Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={()=>setOpen(prev => !prev)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/" >Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>

        </nav>
    )
}

export default Navbar