import useFetch from "../Hooks/useFetch"
import BlogList from "./BlogList"
import ErrorMessage from "./Error"
import Loader from "./Loader"

function Home (){
    const {isData: blogs, isLoading, isError} = useFetch('http://localhost:8000/blogs')
    
    return(
        <header className="home">
            {isError && <ErrorMessage  isError={isError}/>}
            {isLoading && <Loader />}
            {blogs && <BlogList blogs={blogs} title = 'All Blogs'/>}
        </header>
    )
}
export default Home