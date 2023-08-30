import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"

import TweetContainer from "./TweetContainer";

import { TweetReplyForm } from "./TweetReplyForm";
import { firestore } from "../../firebase/firebase";
import { useAuth } from "../../hooks/useAuth";

export function TweetRepliesPage({
    selectedTweetId,
    handleProfileClick, 
    toggleLike,
    tweetData,
    fetchTweetData,
    selectedTweetData,
    setShowReplyForm
}) {
    
    const [replies, setReplies] = useState([]);
    const [user, userDetails] = useAuth();
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);

    useEffect(() => {
        if (selectedTweetId) {
            fetchTweetData(selectedTweetId)
        }
    }, [selectedTweetId]);

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
            {selectedTweetData && (
            //     <TweetContainer 
            //     profileImgUrl={tweet.profileImgUrl}
            //     username={tweet.username}
            //     tagname={tweet.tagname}
            //     timestamp={tweet.timestamp}
            //     userMessage={tweet.userMessage}
            //     tweetLikes={tweet.likes}
            //     tweetId={tweet.tweetId}
            //     imagesUrl={tweet.imagesUrl}
            //     userId={tweet.userId}
            //     handleProfileClick={handleProfileClick}
            //     toggleLike={toggleLike}
            //     tweetData={tweetData}
            //     fetchTweetData={fetchTweetData}
            //     setShowPostForm={setShowPostForm}
            //     setShowReplyForm={setShowReplyForm}
            // />
                <TweetContainer 
                    profileImgUrl={selectedTweetData.profileImgUrl}
                    username={selectedTweetData.username}
                    tagname={selectedTweetData.tagname}
                    timestamp={selectedTweetData.timestamp}
                    tweetLikes={selectedTweetData.likes}
                    userMessage={selectedTweetData.userMessage}
                    tweetId={selectedTweetData.tweetId}
                    userId={selectedTweetData.userId}
                    imagesUrl={selectedTweetData.imagesUrl}
                    handleProfileClick={handleProfileClick}
                    toggleLike={toggleLike}
                    tweetData={tweetData}
                    isTextareaFocused={isTextareaFocused}
                    setIsTextareaFocused={setIsTextareaFocused}
                    fetchTweetData={fetchTweetData}
                    setShowReplyForm={setShowReplyForm}
                />
            )}
<<<<<<< HEAD
=======
            {tweetData && (
                <div className="flex items-start bg-slate-200 gap-5 px-4 py-4 border-b border-gray-200">
                    <TweetReplyForm 
                        mode="reply"
                        user={user}
                        userDetails={userDetails}
                        isTextareaFocused={isTextareaFocused}
                        tweetData={tweetData}
                        parentTweetId={tweetData.tweetId}
                        selectedTweetData={selectedTweetData}
                        setIsTextareaFocused={setIsTextareaFocused}
                    />
                </div>
            )}
>>>>>>> recovery-branch
                <div>
                    {replies.map(reply => (
                        <TweetContainer
                            key={reply.timestamp} 
                            tweetData={tweetData}
                            profileImgUrl={reply.profileImgUrl}
                            username={reply.username}
                            tagname={reply.tagname}
                            timestamp={reply.timestamp}
                            userMessage={reply.userReplyMessage}
                            tweetLikes={reply.likes}
                            tweetId={reply.tweetId}
                            imagesUrl={reply.imagesUrl}
                            userId={reply.userId}
                            handleProfileClick={handleProfileClick}
                            toggleLike={toggleLike}
                            fetchTweetData={fetchTweetData}
                            setShowReplyForm={setShowReplyForm}
                        />
                    ))}
                </div>
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
        </>
    )
}