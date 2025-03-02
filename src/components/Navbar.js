import Link from "next/link"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="Logo">EduBridge</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Find Tutor</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Login</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;