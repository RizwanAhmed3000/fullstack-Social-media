import Post from "../Post/Post"
import Share from "../Shared/Share"
import "./Feed.css"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function Feed({ username }) {
    // console.log(username, "==> username");

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = username ? await axios.get(`http://localhost:8000/posts/profile/${username}`) : await axios.get("http://localhost:8000/posts/timeline/6516a332a0e4a91d919a248a");
            const data = res.data.data
            // console.log(data);
            setPosts(data)
        }
        fetchPost()
    }, [username])
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share />
                {
                    posts.map((post) => (
                        <Post key={post._id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}
