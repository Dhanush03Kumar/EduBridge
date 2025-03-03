import Link from "next/link"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="Logo">EduBridge</h1>
            <div className="nav-links">
                <Link href="#">Home</Link>
                <Link href="#">Find Tutor</Link>
                <Link href="#">About</Link>
                <Link href="#">Login</Link>
            </div>
                

        </nav>
    );
};

export default Navbar;