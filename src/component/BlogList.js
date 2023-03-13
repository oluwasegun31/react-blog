import { Link } from "react-router-dom"

function BlogList({blogs, title}){
    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((item) => (
                <section className="preview" key={item.id}>
                    <Link to={`/blogs/${item.id}`}>
                        <h4>{item.title}</h4>
                        <p>Written by {item.author}</p>
                    </Link>
                </section>

            ))}
        </div>
    )
}

export default BlogList