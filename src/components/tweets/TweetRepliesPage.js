import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"

import TweetContainer from "./TweetContainer";

import { TweetReplyForm } from "./TweetReplyForm";
import { firestore } from "../../firebase/firebase";
import { useAuth } from "../../hooks/useAuth";

export function TweetRepliesPage({
    selectedTweetId,
    tweets, 
    handleProfileClick, 
    toggleLike,
    tweetData,
    fetchTweetData
}) {
    
    const [replies, setReplies] = useState([]);
    const [user, userDetails] = useAuth();
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);

    useEffect(() => {
        if (selectedTweetId) {
            fetchTweetData(selectedTweetId)
        }
    }, [selectedTweetId, fetchTweetData]);

    useEffect(() => {
        const fetchReplies = () => {
            const repliesQuery = query(
                collection(firestore, 'replies'),
                where('parentTweetId', '==', selectedTweetId),
                orderBy('timestamp', 'desc')
            );
            const unsubscribe = onSnapshot(repliesQuery, (querySnapshot) => {
                const fetchedReplies = querySnapshot.docs.map(doc => doc.data());
                setReplies(fetchedReplies);
            });

            return () => unsubscribe();
        }
        fetchReplies();

    }, [selectedTweetId]);


    return (
        <>
            {tweetData && (
                <TweetContainer 
                    profileImg={tweetData.profileImgUrl}
                    username={tweetData.username}
                    tag={tweetData.tagname}
                    timestamp={tweetData.timestamp}
                    text={tweetData.userMessage}
                    tweetLikes={tweetData.likes}
                    tweetId={tweetData.tweetId}
                    userId={tweetData.userId}
                    imagesUrl={tweetData.imagesUrl}
                    handleProfileClick={handleProfileClick}
                    toggleLike={toggleLike}
                    tweets={tweets}
                    tweetData={tweetData}
                    isTextareaFocused={isTextareaFocused}
                    setIsTextareaFocused={setIsTextareaFocused}
                    fetchTweetData={fetchTweetData}
                />
            )}
            {tweetData && (
                <div className="flex items-start bg-slate-200 gap-5 px-4 py-4 border-b border-gray-200">
                    <TweetReplyForm 
                        mode="reply"
                        user={user}
                        userDetails={userDetails}
                        isTextareaFocused={isTextareaFocused}
                        tweetData={tweetData}
                        parentTweetId={tweetData.tweetId}
                        setIsTextareaFocused={setIsTextareaFocused}
                    />
                </div>
            )}
                <div>
                    {replies.map(reply => (
                        <TweetContainer
                            key={reply.timestamp} 
                            tweets={tweets}
                            profileImg={reply.profileImgUrl}
                            username={reply.username}
                            tag={reply.tagname}
                            timestamp={reply.timestamp}
                            text={reply.userReplyMessage}
                            tweetLikes={reply.likes}
                            tweetId={reply.tweetId}
                            imagesUrl={reply.imagesUrl}
                            userId={reply.userId}
                            handleProfileClick={handleProfileClick}
                            toggleLike={toggleLike}
                            fetchTweetData={fetchTweetData}
                        />
                    ))}
                </div>
        </>
    )
}