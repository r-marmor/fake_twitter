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
    showProfilePage: false,
    showPostsReplyPage: false
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

  const showHomepage = () => {
    setUiState(prev => ({
      ...prev,
      showProfilePage: false,
      showPostsReplyPage: false
    }))
  }

  return (
    isProfileLoading ? (
      <div>Loading spinner...</div>
    ) : (
      user ? (
          <Homepage
            user={user}
            userDetails={userDetails}
            tweets={tweets}
            setTweets={setTweets}
            showProfilePage={uiState.showProfilePage}
            setShowProfilePage={(state) => setUiState(prev => ({...prev, showProfilePage: state}))}
            handleProfileClick={handleProfileClick}
            showPostForm={uiState.showPostForm}
            setShowPostForm={(state) => setUiState(prev => ({...prev, showPostForm: state}))}
            showPostsReplyPage={uiState.showPostsReplyPage}
            setShowPostsReplyPage={(state) => setUiState(prev => ({...prev, showPostsReplyPage: state}))}
            viewedUserDetails={viewedUserDetails}
            images={images}
            setImages={setImages}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            toggleLike={toggleLike}
            toggleFollowBtn={toggleFollowBtn}
            showHomepage={showHomepage}
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
