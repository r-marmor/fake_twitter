import { useState, useEffect } from "react";

import { auth, firestore, onAuthStateChanged } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

import CenterFeed from "./components/CenterFeed";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import UnloggedPage from "./components/UnloggedPage";


function App() {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({ 
    username: '',
    tagname: ''
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      setUser(user);
      if (user) {
        const userDocRef = doc(firestore, 'users', user.uid);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          setUserInfo(docSnapshot.data());
        }
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <>
      {user ? (
        <div id="main_page" className="container mx-auto min-h-screen flex">
          <Menu userInfo={userInfo} />
          <CenterFeed  />
          <Sidebar />
      </div>
      ) : (
          <UnloggedPage/>
      )}
    </>
  );
}

export default App;
