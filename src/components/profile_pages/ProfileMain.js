import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth"

export function ProfileMain({ 
        viewedUserDetails, 
        toggleFollowBtn, 
        setProfileActiveTab, 
        setDisplayFollowersPage 
}) {
    const [user, userDetails] = useAuth();
    const [isFollowing, setIsFollowing] = useState(false);
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const isUserFollowing = userDetails && userDetails.following && userDetails.following.includes(viewedUserDetails.userId);
        setIsFollowing(isUserFollowing);
    }, [userDetails, viewedUserDetails])

    const handleToggleFollow = async () => {
        const newFollowStatus = await toggleFollowBtn(user.uid, viewedUserDetails.userId, setIsFollowing)
        setIsFollowing(newFollowStatus);
    }

    
    return (
        <div id="profileMainContent">
            <div id="coverImage" className="border h-48"><img src="cover" alt="cover"></img></div>
            <div className="relative">
                <img src={viewedUserDetails.profileImgUrl} alt="profile" className="absolute -top-16 ml-5 w-32 h-32 rounded-full object-cover"></img>
                <button 
                    onClick={handleToggleFollow}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    type="button" 
                    className={`py-2.5 px-5 w-32 absolute right-4 mr-2 mt-4 text-sm font-medium text-green-500 focus:outline-none bg-white rounded-full border ${isFollowing && isHovered ? 'bg-red-300 text-red-900 border-red-900' : 'hover:bg-green-800 border-green-500'}`}
                    >{isFollowing && isHovered ? 'Unfollow' : (isFollowing ? 'Following' : 'Follow')}</button>
                <div className="h-20"></div>
                <div className="flex flex-col gap-2 mb-8 ml-5">
                    <h1 className="text-black font-bold text-xl">{viewedUserDetails.username}</h1>
                    <p className="text-xs text-gray-400">@{viewedUserDetails.tagname}</p>
                    <p className="text-md text-gray-400">
                        {viewedUserDetails.subscriptionDate.toDate().toLocaleDateString("FR", {
                         year: "numeric", 
                        month: "long", 
                        day: "numeric"
                    })}</p>
                    <div className="flex gap-4 text-md text-gray-400">
                        <p
                            onClick={() => {
                                setProfileActiveTab("following")
                                setDisplayFollowersPage(true)
                            }} 
                            className="hover:underline cursor-pointer">{viewedUserDetails.following.length} following</p>
                        <p
                            onClick={() => {
                                setProfileActiveTab("followers")
                                setDisplayFollowersPage(true)
                            }}
                            className="hover:underline cursor-pointer">{viewedUserDetails.followers.length} followers</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}