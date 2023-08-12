import CenterFeed from "./CenterFeed";
import Menu from "./Menu";
import ProfilePage from "./ProfilePage";
import Sidebar from "./Sidebar";

export default function Homepage({
    user,
    userDetails,  
    showPostForm, 
    setShowPostForm, 
    tweets,
    tweetLikes,
    setTweets,
    showProfilePage,
    setShowProfilePage,
    handleProfileClick,
    viewedUserDetails,
    images,
    setImages,
    userMessage,
    setUserMessage,
    toggleLike,
    toggleFollowBtn
    }) 
{

      return (
            <div id="main_page" className="container mx-auto min-h-screen flex">
                <Menu 
                userDetails={userDetails}
                showPostForm={showPostForm}
                setShowPostForm={setShowPostForm}
                handleProfileClick={handleProfileClick}
                images={images}
                setImages={setImages}
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                />
                {showProfilePage ? (
                    <ProfilePage
                        userId={user.uid}
                        tweets={tweets}
                        tweetLikes={tweetLikes}
                        userDetails={userDetails}
                        setShowProfilePage={setShowProfilePage}
                        viewedUserDetails={viewedUserDetails}
                        toggleLike={toggleLike}
                        handleProfileClick={handleProfileClick}
                        toggleFollowBtn={toggleFollowBtn}
                    />
                ) : (
                    <CenterFeed
                    user={user}
                    tweets={tweets}
                    setTweets={setTweets}
                    userDetails={userDetails}
                    handleProfileClick={handleProfileClick}
                    toggleLike={toggleLike}  
                />
                )}
                <Sidebar />
            </div>   
      )
}