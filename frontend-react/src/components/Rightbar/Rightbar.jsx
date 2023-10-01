import "./Rightbar.css"
import { Users } from "../../dummyData.js"
import { School, Home, LocationOn, AccessTime } from "@mui/icons-material"
import OnlineFriendList from "../Online/OnlineFriendList"

export default function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="rightbarContainer">
            <div className="rightbarWrapper">
                {
                    !profile ? (
                        <HomeRightBar PF={PF} />
                    ) : (
                        <ProfileRightBar user={profile} />
                    )
                }
            </div>
        </div>
    )
}

function HomeRightBar({ PF }) {
    return (
        <>
            <div className="eventConatiner">
                <img src={`${PF}Gift1.png`} alt="" className="giftImage" />
                <span><b>Rizwan</b> and <b>2 other</b> have birthday today</span>
            </div>
            <div className="eventPost">
                <img src="https://img.freepik.com/premium-psd/neon-instagram-post-template-elegant-trendy-dynamic_125755-81.jpg" alt="" className="eventPostImg" />
            </div>
            <div className="onlineFriends">
                <OnlineFriendList onlineFriendsArray={Users} />
            </div>
        </>
    )
}

function ProfileRightBar({ user }) {
    return (
        <>
            <div className="profileRightBar">
                <h3>User information</h3>
                <div className="infoContainer">
                    <School />
                    <span>Education</span>
                </div>
                <div className="infoContainer">
                    <Home />
                    <span>{user.city}</span>
                </div>
                <div className="infoContainer">
                    <LocationOn />
                    <span>{user.city}</span>
                </div>
                <div className="infoContainer">
                    <AccessTime />
                    <span>Joined</span>
                </div>
            </div>
            <div className="profileRightBar">
                <h2>Friends</h2>
                <div className="userFollowings">
                    <UserFollowing />
                </div>
            </div>
        </>
    )
}

function UserFollowing() {
    return (
        <>
            <div className="userFollowing">
                <img src="/assets/person/1.jpeg" alt="" className="firendImg" />
                <p>Name of user</p>
            </div>
            <div className="userFollowing">
                <img src="/assets/person/2.jpeg" alt="" className="firendImg" />
                <p>Name of user</p>
            </div>
            <div className="userFollowing">
                <img src="/assets/person/5.jpeg" alt="" className="firendImg" />
                <p>Name of user</p>
            </div>
            <div className="userFollowing">
                <img src="/assets/person/7.jpeg" alt="" className="firendImg" />
                <p>Name of user</p>
            </div>
            <div className="userFollowing">
                <img src="/assets/person/6.jpeg" alt="" className="firendImg" />
                <p>Name of user</p>
            </div>
            <div className="userFollowing">
                <img src="/assets/person/3.jpeg" alt="" className="firendImg" />
                <p>Name of user</p>
            </div>
        </>
    )
}

