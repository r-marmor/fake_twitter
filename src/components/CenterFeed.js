import { useEffect } from "react";
import TweetContainer from "./TweetContainer";
import { firestore } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function CenterFeed({ 
        tweets, 
        setTweets, 
        handleProfileClick,
        userDetails
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
            {tweets.map((tweet) => (
                <TweetContainer 
                    key={tweet.timestamp}
                    profileImg={tweet.profileImgUrl}
                    username={tweet.username}
                    tag={tweet.tagname}
                    timestamp={tweet.timestamp}
                    text={tweet.userMessage}
                    userId={tweet.userId}
                    handleProfileClick={handleProfileClick}
                />
            ))}
        </div>
    )
};