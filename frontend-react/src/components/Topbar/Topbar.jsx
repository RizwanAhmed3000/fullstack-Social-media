import "./Topbar.css"
import { Search, Person, Message, Notifications } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="left">
                <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                    <h3>SocialMedia</h3>
                </Link>
            </div>
            <div className="middle">
                <Search style={{ color: "#FDFB00" }} />
                <input className="searchInput" type="text" placeholder="Search for friends, post or videos" />
            </div>
            <div className="right">
                <div style={{ display: "flex" }}>
                    <p>Home</p>
                    <p>Timeline</p>
                </div>
                <div className="iconsContainer">
                    <div className="topbarIcons">
                        <Person style={{ color: "#FDFB00" }} />
                        <span className="iconsBadge">1</span>
                    </div>
                    <div className="topbarIcons">
                        <Message style={{ color: "#FDFB00" }} />
                        <span className="iconsBadge">1</span>
                    </div>
                    <div className="topbarIcons">
                        <Notifications style={{ color: "#FDFB00" }} />
                        <span className="iconsBadge">1</span>
                    </div>
                </div>
                <img src="/assets/FB_IMG_1634883944960.jpg" alt="" className="profileImg" />
            </div>
        </div>
    )
}
