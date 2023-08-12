import { useEffect, useRef, useState } from "react";
import TweetContainer from "../TweetContainer";

export function ProfileMenu({ 
    tweets, 
    viewedUserDetails,
    handleProfileClick,
    toggleLike
}) {
    const tweetButtonRef = useRef(null);
    const [displayedContent, setDisplayedContent] = useState("tweets");

    useEffect(() => {
        if (tweetButtonRef.current) {
            tweetButtonRef.current.focus();
        }
    }, []);

    function filteredTweets() {
        if (displayedContent === "tweets") {
            return tweets.filter(tweet => tweet.userId === viewedUserDetails.userId);
        } else if (displayedContent === "likes") {
            return tweets.filter(tweet => viewedUserDetails.likedTweetsId.includes(tweet.tweetId));
        }
        return [];
    }
  
    return (
        <>
            <div id="profileMenu" className="flex w-full justify-between text-center font-bold cursor-pointer">
                <button id="tweets" onClick={() => setDisplayedContent("tweets")} ref={tweetButtonRef} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:outline-none focus:border-b-2 focus:border-green-500 focus:text-green-500">Posts</button>
                <button id="response" onClick={() => setDisplayedContent("response")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Replies</button>
                <button id="medias" onClick={() => setDisplayedContent("medias")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Media</button>
                <button id="likes" onClick={() => setDisplayedContent("likes")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Likes</button>
            </div>
            <div id="menuContainer" className="border-t">
                {filteredTweets().map((tweet) => (
                    <TweetContainer
                        key={tweet.timestamp}
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
                    />
                ))}
            </div>
    </>
    )
}