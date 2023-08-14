import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../firebase/firebase";

export function useReply(
    user, 
    userDetails, 
    tweetData, 
    afterSubmitCallback
) {

    const [userReplyMessage, setUserReplyMessage] = useState("");

    const handleReplySubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            return;
        }

        const userDoc = doc(firestore, 'users', userDetails.userId); 
        const username = userDetails.username;
        const tagname = userDetails.tagname;
        const profileImgUrl = userDetails.profileImgUrl;
        const parentTweetId = tweetData.tweetId;

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
        if (afterSubmitCallback) {
            afterSubmitCallback();
        }
    }

    return {
        userReplyMessage,
        setUserReplyMessage,
        handleReplySubmit
    }
}