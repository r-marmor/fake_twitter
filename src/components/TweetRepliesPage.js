import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firestore } from "../firebase"
import TweetContainer from "./TweetContainer";
import { useAuth } from "./useAuth";
import { TweetReplyForm } from "./TweetReplyForm";

export function TweetRepliesPage( {selectedTweetId, tweets, handleProfileClick, toggleLike} ) {
    const [tweetData, setTweetData] = useState(null)
    const [replies, setReplies] = useState([]);
    const [user, userDetails] = useAuth();
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);
    const [isLoadingReplies, setIsLoadingReplies] = useState(false);

    useEffect(() => {
        if (selectedTweetId) {
            const fetchData = async () => {
                const tweetRef = doc(firestore, 'tweets', selectedTweetId);
                const tweetSnapshot = await getDoc(tweetRef);
                if (tweetSnapshot.exists()) {
                    setTweetData(tweetSnapshot.data());
                } else {
                    console.log("no such document");
                }
            }
            fetchData();
        }
    }, [selectedTweetId]);

    useEffect(() => {
        const fetchReplies = async () => {
            setIsLoadingReplies(true);

            const repliesQuery = query(
                collection(firestore, 'replies'),
                where('parentTweetId', '==', selectedTweetId),
                orderBy('timestamp', 'desc')
            );
            const querySnapshot = await getDocs(repliesQuery);
            const fetchedReplies = querySnapshot.docs.map(doc => doc.data());
            
            setReplies(fetchedReplies);
            setIsLoadingReplies(false);
        }
        fetchReplies();

    }, [selectedTweetId]);

    return (
        <>
            {tweetData ? (
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
                />
            ) : (
                <p>Loading...</p>
            )}
            {tweetData && (
                <div className="flex items-start bg-slate-200 gap-5 px-4 py-4 border-b border-gray-200">
                    <TweetReplyForm 
                        user={user}
                        userDetails={userDetails}
                        isTextareaFocused={isTextareaFocused}
                        tweetData={tweetData}
                        // parentTweetId={tweetData.tweetId}
                        setIsTextareaFocused={setIsTextareaFocused}
                    />
                </div>
            )}
            <div>
                {isLoadingReplies ? (
                    <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    replies.map(reply => (
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
                        />
                    ))
                )}
            </div>
        </>
    )
}