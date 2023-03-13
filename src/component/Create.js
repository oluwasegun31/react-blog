import { useState } from "react"
import { useNavigate } from "react-router-dom";

function CreateBlog(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('oluwasegun');
    const [isPending, setIspending] = useState(false);
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        const addBlog ={title, body, author}
        setIspending(true)
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(addBlog)
        }).then(()=>{
            setIspending(false)
            navigate('/')
        })
    }
    return(
        <section className="create">
            <h3>Add New Blog</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-title">
                    <label>Blog Title:</label>
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange = {(e)=> setTitle(e.target.value)}
                    />
                </div>
                <div className="form-desc">
                    <label>Blog Description:</label>
                    <textarea 
                    required
                    value={body}
                    onChange = {(e)=> setBody(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="form-author">
                    <label>Author:</label>
                    <select
                        value={author}
                        onChange ={(e)=> setAuthor(e.target.value)}
                    >
                        <option value="oluwasegun">Oluwasegun</option>
                        <option value="arupi">Arupi</option>
                        <option value="charles">Charles</option>
                    </select>
                </div>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding..</button>}
            </form>
        </section>
    )
}

export default CreateBlog