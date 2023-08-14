import { useEffect, useState } from "react";

import { firestore } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import TweetContainer from "./tweets/TweetContainer";
import {TweetRepliesPage}  from "./tweets/TweetRepliesPage";


export default function CenterFeed({ 
        user,
        tweets, 
        setTweets, 
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
        setShowReplyForm
    }) 
{
    const [showLatestPosts, setShowLatestPosts] = useState(false)
    
    useEffect(() => {
        const tweetsQuerry = query(collection(firestore, 'tweets'), orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(tweetsQuerry, (querySnapshot) => {
            const tweetsArray = [];
            querySnapshot.forEach(doc => {
                tweetsArray.push(doc.data());
            })
            setTweets(tweetsArray);
        });

        return () => unsubscribe();
    }, []);

    const renderLatestTweets = () => {
        return tweets.slice(0, 2).map(tweet => (
            <div key={tweet.timestamp}
                 onClick={() => handleTweetClick(tweet.tweetId)}>
                <TweetContainer 
                    tweets={tweets}
                    profileImg={tweet.profileImgUrl}
                    username={tweet.username}
                    tag={tweet.tagname}
                    timestamp={tweet.timestamp}
                    text={tweet.userMessage}
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
    };

    const toggleLatestPosts = () => {
        showLatestPosts ? setShowLatestPosts(false) : setShowLatestPosts(true);
    }

    const handleTweetClick = (tweetId) => {
        setSelectedTweetId(tweetId);
        setShowPostsReplyPage(true);
    }

    return (
        <div id="center-feed" className="relative border-x border-gray-300 text-black w-full md:w-5/6 lg:w-4/6">
            <div className="flex border-b h-20 bg-color-default sticky top-0">
                <p onClick={() => showHomepage()}
                   className="w-full cursor-pointer w-fit h-fit ml-5 mt-2 font-bold text-lg cursor-pointer">
                    Home
                </p>
            </div>
            <h1 onClick={() => toggleLatestPosts()}
                    className={`cursor-pointer font-bold text-center py-5 border-b ${showPostsReplyPage ? 'hidden' : ''}`}>{showLatestPosts ? "HIDE LATEST POST" : "SHOW LATEST POSTS"}</h1>
            <div id="latestTweets" className={`border-2 border-red-200 mb-10 shadow-xl ${showLatestPosts ? 'block' : 'hidden'}`}>
                {renderLatestTweets()}
            </div>
            {showPostsReplyPage ? (
                <TweetRepliesPage 
                    selectedTweetId={selectedTweetId}
                    handleProfileClick={handleProfileClick}
                    toggleLike={toggleLike}
                    tweets={tweets}
                    tweetData={tweetData}
                    setTweetData={setTweetData}
                    fetchTweetData={fetchTweetData}
                />
            ) : (
                tweets
                .filter(tweet => tweet.userId === user.uid)
                .map(filteredTweets => (
                    <div key={filteredTweets.timestamp} 
                        onClick={() => handleTweetClick(filteredTweets.tweetId)}
                     >
                        <TweetContainer 
                            tweets={tweets}
                            profileImg={filteredTweets.profileImgUrl}
                            username={filteredTweets.username}
                            tag={filteredTweets.tagname}
                            timestamp={filteredTweets.timestamp}
                            text={filteredTweets.userMessage}
                            tweetLikes={filteredTweets.likes}
                            tweetId={filteredTweets.tweetId}
                            imagesUrl={filteredTweets.imagesUrl}
                            userId={filteredTweets.userId}
                            handleProfileClick={handleProfileClick}
                            toggleLike={toggleLike}
                            tweetData={tweetData}
                            fetchTweetData={fetchTweetData}
                            showPostForm={showPostForm}
                            setShowPostForm={setShowPostForm}
                            showReplyForm={showReplyForm}
                            setShowReplyForm={setShowReplyForm}
                        />
                    </div>
                )))}
        </div>
    )
};