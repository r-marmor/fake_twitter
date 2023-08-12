import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../firebase";
import { getUserDetails } from "./firebaseUtils";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
          setUser(user);
          if (user) {
            const details = await getUserDetails(user.uid);
            setUserDetails(details);
          }
        });
        return () => unsubscribe();
      }, []);
      
      return [user, userDetails];
}