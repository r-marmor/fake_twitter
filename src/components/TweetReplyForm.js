import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../firebase";

export function TweetReplyForm( {user, userDetails, isTextareaFocused, setIsTextareaFocused, tweetData}) {
    const [userReplyMessage, setUserReplyMessage] = useState('');

    const parentTweetId = tweetData.tweetId;

    const handleReplySubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            return;
        }

        // userDetails.userId?
        const userDoc = doc(firestore, 'users', userDetails.userId); 
        // const userSnapshot = await getDoc(userDoc);
        //! remplaçable par userDetails.username etc?
        // const userData = userSnapshot.data();
        // const username = userData.username;
        // const tagname = userData.tagname;
        // const profileImgUrl = userData.profileImgUrl;
        const username = userDetails.username;
        const tagname = userDetails.tagname;
        const profileImgUrl = userDetails.profileImgUrl;

        //!feature pour upload image when replying
        // let imagesUrl = [];

        // for (const image of images) {
        //         try {
        //             const storageRef = ref(storage, `tweets/${image.name}`);
        //             await uploadBytesResumable(storageRef, image);
        //             const currentImageUrl = await getDownloadURL(storageRef);
        //             imagesUrl.push(currentImageUrl);
        //         } catch(error) {
        //             console.error("Failed to load image:", error.message)
        //         }
        //     }

        const repliesCollection = collection(firestore, 'replies');
        const repliesRef = doc(repliesCollection);
        const replyId = repliesRef.id;

        const replies = {
            profileImgUrl,
            userId: userDetails.userId,
            likes: [],
            replyId,
            username,
            tagname,
            userReplyMessage,
            // imagesUrl,
            timestamp: new Date().getTime(),
            parentTweetId
        };

        await setDoc(repliesRef, replies);

        // increments the user's tweet count
        userDetails.totalTweets = parseInt(userDetails.totalTweets) + 1;

        await updateDoc(userDoc, {
            totalTweets: userDetails.totalTweets
        });

        setUserReplyMessage('');
        // setImages([]);
        // setShowPostForm(false);

    }

    return (
        <>
            <div className="w-fit">
                <img className="w-14 h-14 rounded-full object-cover" src={userDetails?.profileImgUrl} alt="profileimage"></img>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <h4 className={`text-sm ${isTextareaFocused ? 'block' : 'hidden'}`}>
                    Replying to <span className="text-blue-500 pt-2">@{tweetData?.tagname}</span>
                </h4>
                <form onSubmit={handleReplySubmit}>
                    <textarea 
                        placeholder="Post your reply!"
                        value={userReplyMessage}
                        onChange={(e) => setUserReplyMessage(e.target.value)}
                        className="bg-color-default block w-full border border-transparent rounded-md text-lg focus:outline-none" 
                        rows="2"
                        onFocus={() => setIsTextareaFocused(true)}
                    >
                    </textarea>
                    <div className="flex justify-end">
                        <button type="submit" className="py-2 px-5 mt-4 inline-flex justify-center items-center rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-all text-sm">
                            Reply
                        </button>
                    </div> 
                </form>  
            </div>
        </>
    )
}