import CenterFeed from "./CenterFeed";
import Menu from "./Menu";
import ProfilePage from "./ProfilePage";
import Sidebar from "./Sidebar";

export default function Homepage({
    userDetails,  
    showPostForm, 
    setShowPostForm, 
    tweets, 
    setTweets,
    showProfilePage,
    setShowProfilePage,
    handleProfileClick,
    viewedUserDetails
    }) 
{

      return (
            <div id="main_page" className="container mx-auto min-h-screen flex">
                <Menu 
                userDetails={userDetails}
                showPostForm={showPostForm}
                setShowPostForm={setShowPostForm}
                handleProfileClick={handleProfileClick}
                />
                {showProfilePage ? (
                    <ProfilePage
                        tweets={tweets}
                        userDetails={userDetails}
                        setShowProfilePage={setShowProfilePage}
                        viewedUserDetails={viewedUserDetails}
                    />
                ) : (
                    <CenterFeed
                    tweets={tweets}
                    setTweets={setTweets}
                    userDetails={userDetails}
                    handleProfileClick={handleProfileClick}   
                />
                )}
                <Sidebar />
            </div>   
      )
}