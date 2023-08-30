import { useState } from "react";
import CenterFeed from "./CenterFeed";
import Menu from "./Menu";
import ProfilePage from "./profile_pages/ProfilePage";
import Sidebar from "./Sidebar";

export default function Homepage({
    user,
    userDetails,  
    showPostForm, 
<<<<<<< HEAD
    setShowPostForm,
=======
    setShowPostForm, 
>>>>>>> recovery-branch
    tweetLikes,
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
<<<<<<< HEAD
    postsData,
    mockedData,
    fetchPostsData
    }) 
{
    const [selectedTweetId, setSelectedTweetId] = useState(null);


      return (
            <div id="main_page" className={`w-full min-h-screen justify-center ${showReplyForm ? 'hidden md:flex' : 'flex'}`}>
=======
    tweetData,
    setTweetData,
    selectedTweetData,
    setSelectedTweetData
    }) 
{
    const [selectedTweetId, setSelectedTweetId] = useState(null);
    
    const [isLoading, setIsLoading] = useState(false); // à remonter dans app.js

    async function fetchTweetData(tweetId) {
        setIsLoading(true);

        const tweetRef = doc(firestore, 'tweets', tweetId);
        const tweetSnapshot = await getDoc(tweetRef);
        if (tweetSnapshot.exists()) {
            setSelectedTweetData(tweetSnapshot.data());
            setSelectedTweetId(tweetId);

        } else {
            console.log("no such document");
        }
        setIsLoading(false);
    }

      return (
            <div id="main_page" className={`flex justify-center w-full min-h-screen ${showReplyForm ? 'hidden md:flex' : 'flex'}`}>
>>>>>>> recovery-branch
                <Menu 
                    setShowPostForm={setShowPostForm}
                    handleProfileClick={handleProfileClick}
                    showHomepage={showHomepage}
                />
                {showProfilePage ? (
                    <ProfilePage
<<<<<<< HEAD
=======
                        tweetData={tweetData}
>>>>>>> recovery-branch
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
<<<<<<< HEAD
                        setTweets={setTweets}
=======
>>>>>>> recovery-branch
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
                        selectedTweetData={selectedTweetData}
                    />
                )}
                <Sidebar />
            </div>   
      )
}