import { useEffect, useRef, useState } from "react";
import TweetContainer from "../tweets/TweetContainer";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { useAuth } from "../../hooks/useAuth";

export function ProfileMenu({ 
    tweetData, 
    viewedUserDetails,
    handleProfileClick,
    toggleLike
}) {

    const [, userDetails] = useAuth();
    const [userReplies, setUserReplies] = useState([])
    const tweetButtonRef = useRef(null);
    const [displayedContent, setDisplayedContent] = useState("tweets");

    useEffect(() => {
        if (!userDetails || !userDetails.userId) {
            return;
        }

        const fetchUserReplies = () => {
            const repliesQuery = query(
                collection(firestore, 'replies'),
                where('userId', '==', viewedUserDetails.userId),
                orderBy('timestamp', 'desc')
            );
            const unsubscribe = onSnapshot(repliesQuery, (querySnapshot) => {
                const fetchedReplies = querySnapshot.docs.map(doc => doc.data());
                setUserReplies(fetchedReplies);
            });

            return () => unsubscribe();
        }
        fetchUserReplies();

    }, [userDetails]);



    useEffect(() => {
        if (tweetButtonRef.current) {
            tweetButtonRef.current.focus();
        }
    }, []);

    function filteredTweets() {
        if (displayedContent === "tweets") {
            return tweetData.filter(tweet => tweet.userId === viewedUserDetails.userId);
        } else if (displayedContent === "likes") {
            return tweetData.filter(tweet => viewedUserDetails.likedTweetsId.includes(tweet.tweetId));
        } else if (displayedContent === "medias") {
            return tweetData.filter(tweet => 
                tweet.userId === viewedUserDetails.userId &&
                tweet.imagesUrl.length > 0
                );
        } else if (displayedContent === "replies") {
            return userReplies
        }
        return [];
    }
  
    return (
        <>
            <div id="profileMenu" className="flex w-full justify-between text-center font-bold cursor-pointer">
                <button id="tweets" onClick={() => setDisplayedContent("tweets")} ref={tweetButtonRef} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:outline-none focus:border-b-2 focus:border-green-500 focus:text-green-500">Posts</button>
                <button id="replies" onClick={() => setDisplayedContent("replies")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Replies</button>
                <button id="medias" onClick={() => setDisplayedContent("medias")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Media</button>
                <button id="likes" onClick={() => setDisplayedContent("likes")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Likes</button>
            </div>
            <div id="menuContainer" className="border-t">
                {filteredTweets().map((tweet) => (
                    <TweetContainer
                        key={tweet.timestamp}
                        profileImgUrl={tweet.profileImgUrl}
                        username={tweet.username}
                        tagname={tweet.tagname}
                        timestamp={tweet.timestamp}
                        userMessage={tweet.userMessage || tweet.userReplyMessage}
                        tweetData={tweetData}
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