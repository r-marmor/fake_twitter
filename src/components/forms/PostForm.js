import { useState } from "react"
import { auth, firestore } from "../../firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

export default function PostForm( { setShowPostForm } ) {
    const [userMessage, setUserMessage] = useState('');

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

        const tweet = {
            username: username,
            tagname: tagname,
            userMessage: userMessage,
            timestamp: new Date().getTime()
        };

        const tweetsCollection = collection(firestore, 'tweets');
        await addDoc(tweetsCollection, tweet);

        setUserMessage('');
        setShowPostForm(false);
    };
    
    return (
        <div className={`w-screen h-screen flex flex-col items-center justify-center px-5 py-10 z-20 md:absolute md:border md:top-0 md:inset-x-1/3 md:mt-48 md:rounded-lg bg-slate-200 text-white md:w-1/2 md:h-48 md:px-4`}>
                {/* Close button */}
                <button className="absolute top-2 left-3 hover:bg-slate-100 rounded-full" 
                        onClick={() => setShowPostForm(false)}
                >
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8L8 16M8.00001 8L16 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <input
                        name="userMessage"
                        value={userMessage}
                        onChange={e => setUserMessage(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        placeholder="Quoi de neuf ?!"
                        />
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
    )
}