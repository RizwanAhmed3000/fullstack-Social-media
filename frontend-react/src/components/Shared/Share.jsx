import "./Share.css"
import { PermMedia, LocationOn, Tag, TagFaces } from "@mui/icons-material"

export default function Share() {
    return (
        <div className="shareBox">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/FB_IMG_1634883944960.jpg" alt="" className="shareProfileImage" />
                    <input type="text" className="postInputText" placeholder="What's in your mind?" />
                    <button className="postBtn">Post</button>
                </div>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span className="shareOtionBtn"><PermMedia className="shareIcons"/>Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <span className="shareOtionBtn"><Tag className="shareIcons"/>Tag</span>
                        </div>
                        <div className="shareOption">
                            <span className="shareOtionBtn"><LocationOn className="shareIcons"/>Location</span>
                        </div>
                        <div className="shareOption">
                            <span className="shareOtionBtn"><TagFaces className="shareIcons"/>Feelings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
