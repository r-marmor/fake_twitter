import { useEffect } from "react";
import TweetContainer from "./TweetContainer";
import { firestore } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function CenterFeed({ 
        user,
        tweets, 
        setTweets, 
        handleProfileClick,
        toggleLike
    }) 
{

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
        return tweets.slice(0, 5).map(tweet => (
            <TweetContainer 
                key={tweet.timestamp}
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
            />
        ));
    };

    return (
        <div id="center-feed" className="relative border-x border-gray-300 text-black w-full md:w-5/6 lg:w-4/6">
            <div className="flex border-b h-20 bg-color-default sticky top-0">
                <p className="w-fit h-fit ml-5 mt-2 font-bold text-lg cursor-pointer">Home</p>
            </div>
            <div id="latestTweets" className="border-2 border-red-200 mb-10 shadow-xl">
                <h1 className="font-bold text-center pt-4">LATEST POSTS</h1>
                {renderLatestTweets()}
            </div>
            {tweets
                .filter(tweet => tweet.userId === user.uid)
                .map(filteredTweets => (
                    <TweetContainer 
                        key={filteredTweets.timestamp}
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
                    />
            ))}
        </div>
    )
};