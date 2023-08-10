import { useEffect, useState } from "react";

import UnloggedPage from "./components/UnloggedPage";
import Homepage from "./components/Homepage";

import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";


function App() {
  const [user, setUser] = useState(null);
  const [userMessage, setUserMessage] = useState('');
  const [images, setImages] = useState([]);

  const [showPostForm, setShowPostForm] = useState(false);
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [viewedUserDetails, setViewedUserDetails] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({
    profileImg: null,
    username: "",
    tagname: "",
    email: "",
    password: "",
    subscriptionDate: ""
});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      setUser(user);
      if (user) {
        const userDocRef = doc(firestore, 'users', user.uid);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          setUserDetails(docSnapshot.data());
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleProfileClick = async (userId) => {
    setShowProfilePage(true);
    setIsProfileLoading(true);

    const userDocRef = doc(firestore, 'users', userId);
    const docSnapshot = await getDoc(userDocRef);
    if (docSnapshot.exists()) {
      setViewedUserDetails(docSnapshot.data());
    }
    setIsProfileLoading(false);
  }

  const toggleLike = async (tweetId) => {
    const tweetDocRef = doc(firestore, 'tweets', tweetId);
    const userDocRef = doc(firestore, 'users', user.uid);

    const tweetIndex = tweets.findIndex(tweet => tweet.tweetId === tweetId);
    const tweet = tweets[tweetIndex];

    const hasLiked = tweet.likes.includes(user.uid);

    if (hasLiked) {
      await updateDoc(tweetDocRef, {
        likes: arrayRemove(user.uid)
      });
      await updateDoc(userDocRef, {
        likedTweetsId: arrayRemove(tweetId)
      })

      tweet.likes = tweet.likes.filter(id => id !== user.uid);
    } else {
      await updateDoc(tweetDocRef, {
        likes: arrayUnion(user.uid)
      });
      await updateDoc(userDocRef, {
        likedTweetsId: arrayUnion(tweetId)
      })

      tweet.likes.push(user.uid);
    }
    
    const updatedTweets = [...tweets];
    updatedTweets[tweetIndex] = tweet;
    setTweets(updatedTweets);
  }

  return (
    isProfileLoading ? (
      <div>Loading spinner...</div>
    ) : (
      user ? (
          <Homepage
            user={user}
            tweets={tweets}
            setTweets={setTweets}
            showProfilePage={showProfilePage}
            setShowProfilePage={setShowProfilePage}
            handleProfileClick={handleProfileClick}
            userDetails={userDetails}
            showPostForm={showPostForm}
            setShowPostForm={setShowPostForm}
            viewedUserDetails={viewedUserDetails}
            images={images}
            setImages={setImages}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            toggleLike={toggleLike}
          />
        ) : (
          <UnloggedPage
            showCreateAccountForm={showCreateAccountForm}
            setShowCreateAccountForm={setShowCreateAccountForm}
            showLoginForm={showLoginForm}
            setShowLoginForm={setShowLoginForm}
            userDetails={userDetails}
            setUserDetails={setUserDetails} 
          />
        )
      )
    );
}

export default App;
