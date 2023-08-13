import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";


export const getUserDetails = async (userId) => {
    const userDocRef = doc(firestore, 'users', userId);
    const docSnapshot = await getDoc(userDocRef);
    return docSnapshot.exists() ? docSnapshot.data() : null;
}


// Toggles the like status of a tweet and updates the corresponding user's liked tweets.
export const toggleLike = async (event, tweetId, userId, tweets) => {
    event.stopPropagation();
  
  const tweetDocRef = doc(firestore, 'tweets', tweetId);
    const userDocRef = doc(firestore, 'users', userId);

    const tweetIndex = tweets.findIndex(tweet => tweet.tweetId === tweetId);
    const tweet = tweets[tweetIndex];

    const hasLiked = tweet.likes.includes(userId);

    if (hasLiked) {
      // If user already liked, remove like
      await updateDoc(tweetDocRef, {
        likes: arrayRemove(userId)
      });
      await updateDoc(userDocRef, {
        likedTweetsId: arrayRemove(tweetId)
      });

      tweet.likes = tweet.likes.filter(id => id !== userId);
    } else {
      // Otherwise, add like
      await updateDoc(tweetDocRef, {
        likes: arrayUnion(userId)
      });
      await updateDoc(userDocRef, {
        likedTweetsId: arrayUnion(tweetId)
      })

      tweet.likes.push(userId);
    }
    
    // Update local tweets state to keep db and local state synced
    const updatedTweets = [...tweets];
    updatedTweets[tweetIndex] = tweet;
    return updatedTweets;
  }


  // Toggles the follow status between the current user and the viewed user.
export const toggleFollowBtn = async (currentUserId, viewedUserId, updateLocalState) => {
    const userDocRef = doc(firestore, 'users', currentUserId);
    const viewedUserDocRef = doc(firestore, 'users', viewedUserId);
  
    const userSnapshot = await getDoc(userDocRef);
    const currentUserDetails = userSnapshot.data();
  
    const hasFollowed = currentUserDetails.following.includes(viewedUserId);

    if (currentUserId === viewedUserId) return;
  
    if (hasFollowed) {
      await updateDoc(userDocRef, {
        following: arrayRemove(viewedUserId)
      });
      await updateDoc(viewedUserDocRef, {
        followers: arrayRemove(currentUserId)
      });
    } else {
      await updateDoc(userDocRef, {
        following: arrayUnion(viewedUserId)
      });
      await updateDoc(viewedUserDocRef, {
        followers: arrayUnion(currentUserId)
      });
    }
    
    updateLocalState(!hasFollowed);
    return !hasFollowed;
  };


  export const toggleAnswerBtn = async (event, tweetId, userId) => {
    event.stopPropagation();

    
  
  }