import { useEffect, useState } from "react";

import UnloggedPage from "./components/UnloggedPage";
import Homepage from "./components/Homepage";

import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, getDoc } from "firebase/firestore";


function App() {
  const [user, setUser] = useState(null);

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
    password: ""
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

  return (
    isProfileLoading ? (
      <div>Loading spinner...</div>
    ) : (
      user ? (
          <Homepage
            tweets={tweets}
            setTweets={setTweets}
            showProfilePage={showProfilePage}
            setShowProfilePage={setShowProfilePage}
            handleProfileClick={handleProfileClick}
            userDetails={userDetails}
            showPostForm={showPostForm}
            setShowPostForm={setShowPostForm}
            viewedUserDetails={viewedUserDetails}
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
