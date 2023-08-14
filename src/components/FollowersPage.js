import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { firestore } from "../firebase/firebase";

export function FollowersPage( {viewedUserDetails, handleProfileClick, activeTab, setActiveTab} ) {
    const [followersDetails, setFollowersDetails] = useState([]);
    const [followingDetails, setFollowingDetails] = useState([]);

    // Fetching logic
    const fetchUserDetails = async(userIds, setter) => {
        let followDetails = [];

        try {
            for (let followIds of userIds) {
                const userDoc = await getDoc(doc(firestore, 'users', followIds));
                if (userDoc.exists()) {
                    followDetails.push(userDoc.data());
                }
            }
            setter(followDetails);

        } catch(error) {
            console.error("Error fetching user details:", error.message);
        }
    };

    useEffect(() => {
        fetchUserDetails(viewedUserDetails.followers, setFollowersDetails);
    }, [viewedUserDetails]);

    useEffect(() => {
        fetchUserDetails(viewedUserDetails.following, setFollowingDetails)
    }, [viewedUserDetails]);

    return (
        <>
            <div className="flex w-full border">
                <div 
                    onClick={() => setActiveTab("followers")}
                    className="relative flex justify-center items-center h-12 w-1/2 hover:bg-green-100 hover:text-green-500">
                    <span className="text-gray-400 font-bold ">Followers</span>
                    <div className={`bottom-0 h-1 w-20 bg-green-500 rounded-full ${activeTab === 'followers' ? 'absolute' : 'hidden'}`}></div>
                </div>
                <div 
                    onClick={() => setActiveTab("following")}
                    className="relative flex justify-center items-center h-12 w-1/2 hover:bg-green-100 hover:text-green-500">
                    <span className="text-gray-400 font-bold">Following</span>
                    <div className={`bottom-0 h-1 w-20 bg-green-500 rounded-full ${activeTab === 'following' ? 'absolute' : 'hidden'}`}></div>
                </div>
            </div>
            <div id="followers-following-details">
                { activeTab === "followers" ?
                    followersDetails.map(follower => (
                        <div key={follower.userId} className="flex px-3 py-5 gap-2 items-center border-b">
                            <img 
                                onClick={() => handleProfileClick(follower.userId)}
                                src={follower.profileImgUrl} 
                                alt="profile" 
                                className="h-14 w-14 rounded-full object-cover cursor-pointer"
                                ></img>
                            <div>
                                <p className="font-bold">{follower.username}</p>
                                <p className="text-xs text-gray-500">@{follower.tagname}</p>
                            </div>
                            
                        </div>
                )) : 
                    followingDetails.map(follower => (
                        <div key={follower.userId} className="flex px-3 py-5 gap-2 items-center border-b">
                            <img 
                                onClick={() => handleProfileClick(follower.userId)}
                                src={follower.profileImgUrl} 
                                alt="profile" 
                                className="h-14 w-14 rounded-full object-cover cursor-pointer"
                                ></img>
                            <div>
                                <p className="font-bold">{follower.username}</p>
                                <p className="text-xs text-gray-500">@{follower.tagname}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}