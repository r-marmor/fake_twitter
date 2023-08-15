import { useState } from "react";
import CenterFeed from "./CenterFeed";
import Menu from "./Menu";
import ProfilePage from "./profile_pages/ProfilePage";
import Sidebar from "./Sidebar";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

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
    showHomepage,
    showReplyForm,
    setShowReplyForm,
    tweetData,
    setTweetData
    }) 
{
    const [selectedTweetId, setSelectedTweetId] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // à remonter dans app.js

    async function fetchTweetData(tweetId) {
        setIsLoading(true);

        const tweetRef = doc(firestore, 'tweets', tweetId);
        const tweetSnapshot = await getDoc(tweetRef);
        if (tweetSnapshot.exists()) {
            setTweetData(tweetSnapshot.data());
            setSelectedTweetId(tweetId);

        } else {
            console.log("no such document");
        }
        setIsLoading(false);
    }

      return (
            <div id="main_page" className={`w-full min-h-screen ${showReplyForm ? 'hidden md:flex' : 'flex'}`}>
                <Menu 
                    setShowPostForm={setShowPostForm}
                    handleProfileClick={handleProfileClick}
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
                        setSelectedTweetId={setSelectedTweetId}
                        selectedTweetId={selectedTweetId}
                        tweetData={tweetData}
                        setTweetData={setTweetData}
                        fetchTweetData={fetchTweetData}
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