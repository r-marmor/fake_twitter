// import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
// import { useState } from "react";
// import { firestore } from "../firebase/firebase";

// export function useFetchPosts() {
//     const [postsData, setPostsData] = useState([]);
//     const [mockedData, setMockedData] = useState([])
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchPostsData = async (collectionName, docId = null, fieldToOrderBy = 'timestamp') => {
//         setIsLoading(true);
//         console.log("fetpostdata triggered");

//         try {
//             if (docId) {
//                 const docRef = doc(firestore, collectionName, docId);
//                 const docSnapshot = await getDoc(docRef);
    
//                 if (docSnapshot.exists()) {
//                     setPostsData(docSnapshot.data());
//                 } 

//             } else {
//                 const docQuery = query(collection(firestore, collectionName), orderBy(fieldToOrderBy, 'desc'));
//                 const querySnapshot = await getDocs(docQuery)
                
//                 if (!querySnapshot.empty) {
//                     const fetchedData = querySnapshot.docs.map(doc => doc.data());
//                     if (collectionName === 'posts') {
//                         setPostsData(fetchedData);
//                     } else if (collectionName === 'mockedForyouSection') {
//                         setMockedData(fetchedData);
//                     }
//                 } 
//             } 
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setIsLoading(false);
//         }
//     }
//     return [ postsData, mockedData, fetchPostsData, isLoading, error ];
// }