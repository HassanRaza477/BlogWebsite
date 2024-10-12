import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            <h1 className="logo"><span>HR</span>Blogs</h1>
            <ul className="navbar">
                <Link href=""><li>Home</li></Link>
                <Link href=""><li>About</li></Link>
                <Link href=""><li>Services</li></Link>
                <Link href=""><li>Contact Us</li></Link>
            </ul>
        </div>
    )
}