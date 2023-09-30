import Post from "../Post/Post"
import Share from "../Shared/Share"
import "./Feed.css"
import { Posts } from "../../dummyData.js"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("posts/timeline/6516a332a0e4a91d919a248a");
            const data = res.data.data
            console.log(data);
            setPosts(data)
        }
        fetchPost()
    }, [])
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share />
                {
                    posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}
