import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch"
import ErrorMessage from "./Error"
import Loader from "./Loader"


function BlogDetails(){
    const {id} = useParams()
    const {isData: blog, isLoading, isError} = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate()

    const handleDelete =()=>{
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }

    return(
        <section className="blog-details">
            {isError && <ErrorMessage/>}
            {isLoading && <Loader />}
            {blog && (
                <div className="details">
                    <h3>{blog.title}</h3>
                    <p>written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete Blog</button>
                </div>
            )}
        </section>
    )
}
export default BlogDetails