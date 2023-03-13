import { Link } from "react-router-dom"
function Error404(){
    return(
        <section className="error-page">
            <h1>ERROR 404</h1>
            <p>Sorry, Page not available!!</p>
            <Link to='/'>
                <button>Home Page</button>
            </Link>
            
        </section>
    )
}

export default Error404