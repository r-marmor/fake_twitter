import { useState } from "react"
import { auth, firestore, storage } from "../../firebase/firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function PostForm({ 
    showPostForm,
    setShowPostForm, 
    images, 
    setImages, 
    userMessage, 
    setUserMessage 
}) {
    const [errorUploadMsg, setErrorUploadMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        if (!user) {
            return;
        }

        const userDoc = doc(firestore, 'users', user.uid);
        const userSnapshot = await getDoc(userDoc);

        const userData = userSnapshot.data();
        const username = userData.username;
        const tagname = userData.tagname;
        const profileImgUrl = userData.profileImgUrl;

        let imagesUrl = [];

        for (const image of images) {
                try {
                    const storageRef = ref(storage, `tweets/${image.name}`);
                    await uploadBytesResumable(storageRef, image);
                    const currentImageUrl = await getDownloadURL(storageRef);
                    imagesUrl.push(currentImageUrl);
                } catch(error) {
                    console.error("Failed to load image:", error.message)
                }
            }

        const tweetsCollection = collection(firestore, 'tweets');
        const tweetRef = doc(tweetsCollection);
        const tweetId = tweetRef.id;

        const tweet = {
            profileImgUrl: profileImgUrl,
            userId: user.uid,
            likes: [],
            tweetId,
            username,
            tagname,
            userMessage,
            imagesUrl,
            timestamp: new Date().getTime()
        };

        await setDoc(tweetRef, tweet);

        // increments the user's tweet count
        userData.totalTweets = parseInt(userData.totalTweets) + 1;

        await updateDoc(userDoc, {
            totalTweets: userData.totalTweets
        });

        setUserMessage('');
        setImages([]);
        setShowPostForm(false);
    };
    
    return (
        <>
        <div className={`md:flex flex-col items-center justify-center px-5 py-5 mt-5 z-50 absolute w-full md:border md:top-0 md:inset-x-1/3 md:mt-48 md:rounded-lg bg-slate-200 text-white md:w-1/2 md:px-4 ${showPostForm ? 'flex md:absolute' : 'hidden' }`}>
                {/* Close button */}
                <button className="absolute top-2 left-3 hover:bg-slate-100 rounded-full" 
                        onClick={() => setShowPostForm(false)}
                >
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8L8 16M8.00001 8L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <form onSubmit={handleSubmit} className="w-full bg-slate-200 p-4 rounded-lg">
                    <div className="mb-4">
                        <input
                        name="userMessage"
                        value={userMessage}
                        onChange={e => setUserMessage(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        placeholder="Quoi de neuf ?!"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <input
                            name="images"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={e => {
                                if (e.target.files) {
                                    if (images.length + e.target.files.length > 2) {
                                        setErrorUploadMessage('You can only upload up to 2 images')
                                        return;
                                    }
                                    setImages(prevImages => [...prevImages, ...Array.from(e.target.files)]);
                                }
                            }}
                            className="text-gray-700"
                        />
                        <div className="flex gap-2 mt-2">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(image)}
                                    alt=""
                                    className="w-24 h-24 object-cover mb-2"
                                />
                            ))}
                        </div>
                        <div id="error-image" className="text-red-500 font-bold">{errorUploadMsg}</div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                        type="submit"
                        >
                        Publier
                        </button>
                    </div>
                </form>
        </div>
        <div className="md:hidden absolute z-20 bg-slate-200 h-screen w-screen">
            
        </div>
        </>
    )
}