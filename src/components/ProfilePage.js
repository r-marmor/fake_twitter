import { useState } from "react";
import { ProfileHeader } from "./ProfilePageComponents/ProfileHeader";
import { ProfileMain } from "./ProfilePageComponents/ProfileMain";
import { ProfileMenu } from "./ProfilePageComponents/ProfileMenu";
import { FollowersPage } from "./FollowersPage";

export default function ProfilePage({ 
    setShowProfilePage, 
    userDetails,
    viewedUserDetails,
    tweets,
    handleProfileClick,
    toggleLike,
    toggleFollowBtn,
    showHomepage
    }) {

    const [displayFollowersPage, setDisplayFollowersPage] = useState(false);
    const [activeTab, setActiveTab] = useState("followers");
   
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
                    activeTab={activeTab}
                    setActiveTab={setActiveTab} /> 
             ) : (
                <>
                    <ProfileMain 
                    viewedUserDetails={viewedUserDetails} 
                    toggleFollowBtn={toggleFollowBtn}
                    setActiveTab={setActiveTab}
                    setDisplayFollowersPage={setDisplayFollowersPage} />
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