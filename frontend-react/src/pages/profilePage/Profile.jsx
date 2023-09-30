import "./profile.css"
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Topbar />
            <div className="profile">
                <div className="profileCardContainer">
                    <div className="profileCardWrapper">
                        <div className="profileImgs">
                            <img src={`${PF}post/3.jpg`} alt="" className="profileCoverImg"/>
                            <img src={`${PF}FB_IMG_1634883944960.jpg`} alt="" className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h2>UserName</h2>
                            <p>This is the user description...</p>
                        </div>
                    </div>
                </div>
                <div className="profileBottomContainer">
                    <div className="profileBottomLeft">
                        <Sidebar />
                    </div>
                    <div className="profileBottomMid">
                        <Feed />
                    </div>
                    <div className="profileBottomRight">
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
