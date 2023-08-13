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
    setShowPostsReplyPage,
    showPostsReplyPage,
    viewedUserDetails,
    images,
    setImages,
    userMessage,
    setUserMessage,
    toggleLike,
    toggleFollowBtn,
    showHomepage
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
                showProfilePage={showProfilePage}
                setShowProfilePage={setShowProfilePage}
                showHomepage={showHomepage}
                />
                {showProfilePage ? (
                    <ProfilePage
                        tweets={tweets}
                        tweetLikes={tweetLikes}
                        userDetails={userDetails}
                        setShowProfilePage={setShowProfilePage}
                        viewedUserDetails={viewedUserDetails}
                        toggleLike={toggleLike}
                        handleProfileClick={handleProfileClick}
                        toggleFollowBtn={toggleFollowBtn}
                        showHomepage={showHomepage}
                    />
                ) : (
                    <CenterFeed
                    user={user}
                    tweets={tweets}
                    setTweets={setTweets}
                    userDetails={userDetails}
                    handleProfileClick={handleProfileClick}
                    toggleLike={toggleLike}
                    setShowPostsReplyPage={setShowPostsReplyPage}  
                    showPostsReplyPage={showPostsReplyPage}
                    showHomepage={showHomepage}
                    
                />
                )}
                <Sidebar />
            </div>   
      )
}