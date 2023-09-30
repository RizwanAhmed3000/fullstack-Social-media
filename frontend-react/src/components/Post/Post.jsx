import "./Post.css"
import { ThumbUp, Favorite } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { Users } from "../../dummyData.js"
import axios from "axios";

export default function Post({ post }) {
    // console.log(post, "==> in comp");
    const [likeCount, setLikeCount] = useState(post.likes.length)
    const [isLikeTrue, setIsLikeTrue] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`user/${post.userId}`);
            const data = res.data.userDeatils
            console.log(data);
            setUser(data)
        }
        fetchUser()
    }, [])

    function likeHandler() {
        if (!isLikeTrue) {
            setLikeCount((c) => c + 1)
            setIsLikeTrue(true)
        } else if (isLikeTrue) {
            setLikeCount((c) => c - 1)
            setIsLikeTrue(false)
        }
    }

    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="authDeatil">
                        <img src={PF + user?.profilePicture} alt="" className="profileImage" />
                        <span className="userName">{
                            user?.userName
                        }</span>
                        <span className="timeAgo">{post?.createdAt}</span>
                    </div>
                </div>
                <div className="postMid">
                    <div >
                        <p className="postText">{post?.postDescription}</p>
                        <div className="postImgContainer">
                            <img src={PF + post?.postImage} alt="" className="postImg" />
                        </div>
                    </div>
                </div>
                <div className="postBottom">
                    <div className="likeBtn">
                        <span className="thumbsUp" onClick={() => {
                            likeHandler()
                        }}><ThumbUp style={isLikeTrue ? { color: "#4e79d9" } : { color: "white" }} /></span>
                        {likeCount} people like it
                        <span></span>
                    </div>
                    <div className="commentIndicator">
                        <span>{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
