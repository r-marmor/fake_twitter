import { useState } from "react";

import UnloggedPage from "./components/UnloggedPage";
import Homepage from "./components/Homepage";

// Firebase imports
import { useAuth } from "./hooks/useAuth";
import { getUserDetails, toggleFollowBtn, toggleLike } from "./firebase/firebaseUtils";
import { Overlay } from "./components/Overlay";
import { useFetchPosts } from "./hooks/useFetchPosts";


function App() {
  // Hooks
  const [user, userDetails] = useAuth();
  const [postsData, mockedData, fetchPostsData] = useFetchPosts();

  const [uiState, setUiState] = useState({
    showPostForm: false,
    showCreateAccountForm: false,
    showLoginForm: false,
    showProfilePage: false,
    showPostsReplyPage: false,
    showReplyForm: false
  });

  // Application states
  const [userMessage, setUserMessage] = useState('');
  const [images, setImages] = useState([]);
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

  const homepageComponent = (
    <Homepage
      user={user}
      userDetails={userDetails}
      showProfilePage={uiState.showProfilePage}
      setShowProfilePage={(state) => setUiState(prev => ({...prev, showProfilePage: state}))}
      handleProfileClick={handleProfileClick}
      showPostForm={uiState.showPostForm}
      setShowPostForm={(state) => setUiState(prev => ({...prev, showPostForm: state}))}
      showPostsReplyPage={uiState.showPostsReplyPage}
      setShowPostsReplyPage={(state) => setUiState(prev => ({...prev, showPostsReplyPage: state}))}
      showReplyForm={uiState.showReplyForm}
      setShowReplyForm={(state) => setUiState(prev => ({...prev, showReplyForm: state}))}
      viewedUserDetails={viewedUserDetails}
      images={images}
      setImages={setImages}
      userMessage={userMessage}
      setUserMessage={setUserMessage}
      toggleLike={toggleLike}
      toggleFollowBtn={toggleFollowBtn}
      showHomepage={showHomepage}
      postsData={postsData}
      mockedData={mockedData}
      fetchPostsData={fetchPostsData}
    />
  );

  return (
    isProfileLoading ? (
      <div>Loading spinner...</div>
    ) : (
      user ? (
        uiState.showPostForm || uiState.showReplyForm ? (
          <Overlay  show={uiState.showPostForm || uiState.showReplyForm}
                    showPostForm={uiState.showPostForm}
                    showReplyForm={uiState.showReplyForm}
                    setShowReplyForm={(state) => setUiState(prev => ({...prev, showReplyForm: state}))}
                    images={images}
                    setImages={setImages}
                    setShowPostForm={(state) => setUiState(prev => ({...prev, showPostForm: state}))}
                    userMessage={userMessage}
                    setUserMessage={setUserMessage}
                    postsData={postsData}                    
          >
            {homepageComponent}
          </Overlay>
        ) :
        homepageComponent
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
