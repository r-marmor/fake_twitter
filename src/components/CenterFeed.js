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

    return (
        <div id="center-feed" className="relative border-x border-gray-300 text-black w-full md:w-5/6 lg:w-4/6">
            <div className="flex border-b h-20 bg-color-default sticky top-0">
                <p className="w-fit h-fit ml-5 mt-2 font-bold text-lg cursor-pointer">Home</p>
            </div>
            {tweets
                .filter(tweet => tweet.userId === user.uid)
                .map(filteredTweets => (
                    <TweetContainer 
                        key={filteredTweets.timestamp}
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