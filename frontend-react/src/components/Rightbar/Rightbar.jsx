import "./Rightbar.css"
import { Users } from "../../dummyData.js"
import { School, Home, LocationOn, AccessTime } from "@mui/icons-material"
import OnlineFriendList from "../Online/OnlineFriendList"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js"
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";

export default function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get(`http://localhost:8000/user/friends/${user?._id}`);
                console.log(friendList.data.message);
                setFriends(friendList.data.message)
            } catch (error) {
                console.log(error);
            }
        }
        getFriends()
    }, [user?._id])

    return (
        <div className="rightbarContainer">
            <div className="rightbarWrapper">
                {
                    !profile ? (
                        <HomeRightBar PF={PF} />
                    ) : (
                        <ProfileRightBar user={profile} friends={friends} />
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

function ProfileRightBar({ user, friends }) {
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
                    <UserFollowing friends={friends} />
                </div>
            </div>
        </>
    )
}

function UserFollowing({ friends }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            {
                friends.map((friend) => (
                    <div key={friend?._id} className="userFollowing">
                        <img src={friend?.profilePicture ? PF + friend?.profilePicture : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`} alt="" className="firendImg" />
                        <p>{friend.userName}</p>
                    </div>
                ))
            }
        </>
    )
}

