import { useEffect, useRef, useState } from "react";

import { firestore } from "../firebase/firebase";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";

import TweetContainer from "./tweets/TweetContainer";
import {TweetRepliesPage}  from "./tweets/TweetRepliesPage";
import { useAuth } from "../hooks/useAuth";

export default function CenterFeed({ 
        user,
        handleProfileClick,
        toggleLike,
        setShowPostsReplyPage,
        showPostsReplyPage,
        showHomepage,
        selectedTweetId,
        setSelectedTweetId,
        tweetData,
        setTweetData,
        fetchTweetData,
        showPostForm,
        setShowPostForm,
        showReplyForm,
        setShowReplyForm,
        selectedTweetData,
        replies
    }) 
{
    const centerFeedButtonRef = useRef(null);

    const [, userDetails] = useAuth();
    
    const [followingIds, setFollowingIds] = useState([])
    const [showForYouSection, setShowForYouSection] = useState(false);
    const [showFollowingSection, setShowFollowingSection] = useState(false)

    
    useEffect(() => {
        const tweetsQuerry = query(collection(firestore, 'tweets'), orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(tweetsQuerry, (querySnapshot) => {
            const tweetsArray = [];
            querySnapshot.forEach(doc => {
                tweetsArray.push(doc.data());
            })
            setTweetData(tweetsArray);
        });

        return () => unsubscribe();
    }, [setTweetData]);


    useEffect(() => {
        if (!userDetails || !userDetails.userId) {
            return;
          }

        const fetchFollowing = async () => {
          const userDoc = doc(collection(firestore, 'users'), userDetails.userId);
          const userData = await getDoc(userDoc);
          if (userData.exists) {
            setFollowingIds(userData.data().following);
          }
        };
        fetchFollowing();
    }, [userDetails]);


    useEffect(() => {
        if (centerFeedButtonRef.current) {
            centerFeedButtonRef.current.focus();
            centerFeedButtonRef.current.click();
        }
    }, []);

    const renderFollowingSection = () => {
        return tweetData
            .filter(tweet => followingIds.includes(tweet.userId))
            .map(tweet => (
                <div key={tweet.timestamp}
                     onClick={() => handleTweetClick(tweet.tweetId)}>
                    <TweetContainer 
                        profileImgUrl={tweet.profileImgUrl}
                        username={tweet.username}
                        tagname={tweet.tagname}
                        timestamp={tweet.timestamp}
                        userMessage={tweet.userMessage}
                        tweetLikes={tweet.likes}
                        tweetId={tweet.tweetId}
                        imagesUrl={tweet.imagesUrl}
                        userId={tweet.userId}
                        handleProfileClick={handleProfileClick}
                        toggleLike={toggleLike}
                        tweetData={tweetData}
                        fetchTweetData={fetchTweetData}
                        setShowPostForm={setShowPostForm}
                        setShowReplyForm={setShowReplyForm}
                    />
                </div>
            ));
    }

    const renderForyouSection = () => {
        return tweetData
            .slice(-5)
            .map(tweet => (
                <div key={tweet.timestamp}
                     onClick={() => handleTweetClick(tweet.tweetId)}>
                    <TweetContainer 
                        profileImgUrl={tweet.profileImgUrl}
                        username={tweet.username}
                        tagname={tweet.tagname}
                        timestamp={tweet.timestamp}
                        userMessage={tweet.userMessage}
                        tweetLikes={tweet.likes}
                        tweetId={tweet.tweetId}
                        imagesUrl={tweet.imagesUrl}
                        userId={tweet.userId}
                        handleProfileClick={handleProfileClick}
                        toggleLike={toggleLike}
                        tweetData={tweetData}
                        fetchTweetData={fetchTweetData}
                        setShowPostForm={setShowPostForm}
                        setShowReplyForm={setShowReplyForm}
                    />
                </div>
            ));
    }

    const handleTweetClick = (tweetId) => {
        setSelectedTweetId(tweetId);
        setShowPostsReplyPage(true);
    }

    return (
        <div id="center-feed" className="relative border-x text-black w-full lg:w-1/3">
            <div id="center-feed-header" className="flex flex-col md:justify-start md:items-center border-b bg-sticky sticky top-0">
                <p onClick={() => showHomepage()}
                   className="hidden md:block w-full cursor-pointer w-fit h-20 ml-5 pt-4 font-bold text-lg cursor-pointer">
                    Home
                </p>
                <div className="flex w-full py-4 items-center h-20 md:hidden">
                    <div className=" pl-3 w-1/2">
                        
                        <img src={userDetails?.profileImgUrl}
                            className="w-14 h-14 object-cover rounded-full" alt="profile of user">

                            </img>
                    </div>
                    <svg onClick={() => showHomepage()}
                        className="cursor-pointer"
                        width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                        <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14.035 44.508h-5.65V26.882c0-.564.008-1.355.02-2.372c.014-1.018.02-1.802.02-2.353l-5.498 24.351h-5.893l-5.459-24.351c0 .551.006 1.335.02 2.353c.014 1.017.02 1.808.02 2.372v19.626h-5.65V17.492h8.824l5.281 22.814l5.242-22.814h8.725v29.016z" fill="#000000"></path>
                    </svg>
                </div>
                <div className="flex w-full border-t h-10 font-bold">
                    <button onClick={() => {
                                setShowForYouSection(true)
                                setShowFollowingSection(false);
                            }} 
                            ref={centerFeedButtonRef} 
                            className="flex items-center justify-center w-1/2 border-r hover:bg-gray-200 focus:outline-none focus:text-green-500">
                        <div className={`flex items-center h-full ${showForYouSection ? 'border-b-2 border-green-500' : ''}`}>
                            <p>For you</p>
                        </div>
                        
                    </button>
                    <button onClick={() => {
                                setShowForYouSection(false);
                                setShowFollowingSection(true);
                            }} 
                            className="flex items-center justify-center w-1/2 hover:bg-gray-200 focus:outline-none focus:text-green-500">
                        <div className={`flex items-center h-full ${showFollowingSection ? 'border-b-2 border-green-500' : ''}`}>
                            <p>Following</p>
                        </div>
                    </button>
                </div>
                
            </div>

            {/* For you section */}
            {tweetData && !showPostsReplyPage &&
                 <div id="for-you-section" className={`mb-10 bg-color-default ${showForYouSection ? 'block' : 'hidden'}`}>
                    {renderForyouSection()}
                </div> 
            }
               
            

            {/* Following section */}
            {tweetData && !showPostsReplyPage &&
                <div id="following-section" className={`mb-10 bg-color-default shadow-xl ${showFollowingSection ? 'block' : 'hidden'}`}>
                    {renderFollowingSection()}
                </div>
            }
            
            { showPostsReplyPage && (
                    <TweetRepliesPage 
                        selectedTweetId={selectedTweetId}
                        handleProfileClick={handleProfileClick}
                        toggleLike={toggleLike}
                        tweetData={tweetData}
                        fetchTweetData={fetchTweetData}
                        selectedTweetData={selectedTweetData}
                        setShowReplyForm={setShowReplyForm}
                        replies={replies}
                    />
                ) 
            }
            {/* Button post small screen */}
            <button onClick={() => setShowPostForm(true)} className="absolute top-5 right-5 md:hidden pl-2">
                <svg viewBox="-8 0 40 24" aria-hidden="true" className="bg-blue-400 text-white w-12 h-12 rounded-full"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
            </button>
        </div>
    )
};