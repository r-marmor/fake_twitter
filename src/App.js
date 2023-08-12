import { useState } from "react";

import UnloggedPage from "./components/UnloggedPage";
import Homepage from "./components/Homepage";

// Firebase imports
import { useAuth } from "./components/useAuth";
import { getUserDetails, toggleFollowBtn, toggleLike } from "./components/firebaseUtils";


function App() {
  // User state
  const [user, userDetails] = useAuth();

  const [uiState, setUiState] = useState({
    showPostForm: false,
    showCreateAccountForm: false,
    showLoginForm: false,
    showProfilePage: false
  });

  // Application states
  const [userMessage, setUserMessage] = useState('');
  const [images, setImages] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [viewedUserDetails, setViewedUserDetails] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  // Fetch user profile details by userId
  const handleProfileClick = async (userId) => {
    setUiState( { ...uiState, showProfilePage: true } )
    setIsProfileLoading(true);

    const userDetails = await getUserDetails(userId)
    setViewedUserDetails(userDetails);
    
    setIsProfileLoading(false);
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
            showProfilePage={uiState.showProfilePage}
            setShowProfilePage={(state) => setUiState(prev => ({...prev, showProfilePage: state}))}
            handleProfileClick={handleProfileClick}
            userDetails={userDetails}
            showPostForm={uiState.showPostForm}
            setShowPostForm={(state) => setUiState(prev => ({...prev, showPostForm: state}))}
            viewedUserDetails={viewedUserDetails}
            images={images}
            setImages={setImages}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            toggleLike={toggleLike}
            toggleFollowBtn={toggleFollowBtn}
          />
        ) : (
          <UnloggedPage
            showCreateAccountForm={uiState.showCreateAccountForm}
            setShowCreateAccountForm={(state) => setUiState(prev => ({...prev, showCreateAccountForm: state}))}
            showLoginForm={uiState.showLoginForm}
            setShowLoginForm={(state) => setUiState(prev => ({...prev, showLoginForm: state}))}
          />
        )
      )
    );
}

export default App;
