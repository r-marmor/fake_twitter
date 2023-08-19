import { useState } from "react";
import CenterFeed from "./CenterFeed";
import Menu from "./Menu";
import ProfilePage from "./profile_pages/ProfilePage";
import Sidebar from "./Sidebar";

export default function Homepage({
    user,
    userDetails,  
    showPostForm, 
    setShowPostForm,
    tweetLikes,
    setTweets,
    showProfilePage,
    setShowProfilePage,
    handleProfileClick,
    setShowPostsReplyPage,
    showPostsReplyPage,
    viewedUserDetails,
    toggleLike,
    toggleFollowBtn,
    showHomepage,
    showReplyForm,
    setShowReplyForm,
    postsData,
    mockedData,
    fetchPostsData
    }) 
{
    const [selectedTweetId, setSelectedTweetId] = useState(null);


      return (
            <div id="main_page" className={`w-full min-h-screen justify-center ${showReplyForm ? 'hidden md:flex' : 'flex'}`}>
                <Menu 
                    setShowPostForm={setShowPostForm}
                    handleProfileClick={handleProfileClick}
                    showHomepage={showHomepage}
                />
                {showProfilePage ? (
                    <ProfilePage
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
                        setTweets={setTweets}
                        userDetails={userDetails}
                        handleProfileClick={handleProfileClick}
                        toggleLike={toggleLike}
                        setShowPostsReplyPage={setShowPostsReplyPage}  
                        showPostsReplyPage={showPostsReplyPage}
                        showHomepage={showHomepage}
                        setSelectedTweetId={setSelectedTweetId}
                        selectedTweetId={selectedTweetId}
                        postsData={postsData}
                        mockedData={mockedData}
                        fetchPostsData={fetchPostsData}
                        showPostForm={showPostForm}
                        setShowPostForm={setShowPostForm}
                        showReplyForm={showReplyForm}
                        setShowReplyForm={setShowReplyForm}
                    />
                )}
                <Sidebar />
            </div>   
      )
}