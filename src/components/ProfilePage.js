import { useState } from "react";
import { ProfileHeader } from "./ProfilePageComponents/ProfileHeader";
import { ProfileMain } from "./ProfilePageComponents/ProfileMain";
import { ProfileMenu } from "./ProfilePageComponents/ProfileMenu";
import { FollowersPage } from "./FollowersPage";

export default function ProfilePage({ 
    setShowProfilePage, 
    viewedUserDetails,
    tweets,
    handleProfileClick,
    toggleLike,
    toggleFollowBtn
    }) {

    const [displayFollowersPage, setDisplayFollowersPage] = useState(true);
   
    return (
        <div id="profileContainer" className="relative border-x border-gray-300 text-black w-full md:w-5/6 lg:w-4/6">
            <ProfileHeader 
                setShowProfilePage={setShowProfilePage} 
                viewedUserDetails={viewedUserDetails}
                displayFollowersPage={displayFollowersPage}
                setDisplayFollowersPage={setDisplayFollowersPage} />
            {displayFollowersPage ? (
                <FollowersPage viewedUserDetails={viewedUserDetails} /> 
             ) : (
                <>
                    <ProfileMain 
                    viewedUserDetails={viewedUserDetails} 
                    toggleFollowBtn={toggleFollowBtn} />
                    <ProfileMenu 
                        viewedUserDetails={viewedUserDetails} 
                        handleProfileClick={handleProfileClick}
                        toggleLike={toggleLike}
                        tweets={tweets} />
                </>
             )}
        </div>
    )
}