import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <div className="logo">The.Blog</div>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/create">ADD BLOG</Link>
            </div>
        </nav>
    )
}

export default Navbar