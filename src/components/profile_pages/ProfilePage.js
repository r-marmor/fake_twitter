import { useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileMain } from "./ProfileMain";
import { ProfileMenu } from "./ProfileMenu";
import { FollowersPage } from "../FollowersPage";

export default function ProfilePage({ 
    setShowProfilePage, 
    userDetails,
    viewedUserDetails,
    tweetData,
    handleProfileClick,
    toggleLike,
    toggleFollowBtn,
    showHomepage
    }) {

    const [displayFollowersPage, setDisplayFollowersPage] = useState(false);
    const [profileActiveTab, setProfileActiveTab] = useState("followers");
   
    return (
        <div id="profileContainer" className="relative border-x border-gray-300 text-black w-full md:w-5/6 lg:w-4/6">
            <ProfileHeader 
                setShowProfilePage={setShowProfilePage} 
                viewedUserDetails={viewedUserDetails}
                displayFollowersPage={displayFollowersPage}
                setDisplayFollowersPage={setDisplayFollowersPage}
                showHomepage={showHomepage} 
            />
            {displayFollowersPage ? (
                <FollowersPage 
                    handleProfileClick={handleProfileClick}
                    viewedUserDetails={viewedUserDetails}
                    profileActiveTab={profileActiveTab}
                    setProfileActiveTab={setProfileActiveTab} /> 
             ) : (
                <>
                    <ProfileMain 
                    viewedUserDetails={viewedUserDetails} 
                    toggleFollowBtn={toggleFollowBtn}
                    setProfileActiveTab={setProfileActiveTab}
                    setDisplayFollowersPage={setDisplayFollowersPage} />
                    <ProfileMenu 
                        viewedUserDetails={viewedUserDetails} 
                        handleProfileClick={handleProfileClick}
                        toggleLike={toggleLike}
                        tweetData={tweetData} 
                    />
                </>
             )}
        </div>
    )
}