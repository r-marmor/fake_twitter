import { useEffect, useState } from "react";
import TweetContainer from "./TweetContainer";
import { firestore } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function CenterFeed() {
    const [tweets, setTweets] = useState([]);

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
        <div className="relative border-x border-gray-300 w-full md:w-5/6 lg:w-4/6">
            {tweets.map((tweet) => (
                <TweetContainer 
                    username={tweet.username}
                    tag={tweet.tagname}
                    timestamp={tweet.timestamp}
                    text={tweet.userMessage}
                />
            ))}
        </div>
    )
};