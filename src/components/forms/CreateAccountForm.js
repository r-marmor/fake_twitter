import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, createUserWithEmailAndPassword, firestore } from "../../firebase";

export default function CreateAccountForm( { setShowCreateAccountForm} ) {
    const [userDetails, setUserDetails] = useState({
        username: "",
        tagname: "",
        email: "",
        password: ""
    });

    const handleCreateAccountChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    }

    const handleCreateAccountSubmit = async (e) => {
        e.preventDefault();
        const { username, tagname, email, password } = userDetails;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(collection(firestore, 'users'), user.uid), {
                username,
                tagname
            });

        setUserDetails({
            username: "",
            tagname: "",
            email: "",
            password: ""
        });


        } catch (error) {
            console.error("Error creating user:", error.message)
        }
    }

    return (
        <div className={`w-screen h-screen flex flex-col items-center justify-center px-5 py-10 z-20 md:absolute md:border md:top-0 md:inset-x-1/3 md:mt-48 md:rounded-lg bg-black text-white md:w-96 md:h-auto md:py-4 md:px-14}`}>
                <button onClick={() => setShowCreateAccountForm(false)} className="absolute top-5 left-5 hover:bg-slate-100 rounded-full">
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8L8 16M8.00001 8L16 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h1 className="font-bold text-xl mb-10">Créer un compte</h1>
                <form className="w-full max-w-sm" onSubmit={handleCreateAccountSubmit}>
                    <div className="mb-4">
                        <input
                        name="username"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Username"
                        onChange={handleCreateAccountChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        name="tagname"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="text"
                        placeholder="tagname"
                        onChange={handleCreateAccountChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        name="email"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="email"
                        placeholder="Email"
                        onChange={handleCreateAccountChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        name="password"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="password"
                        placeholder="Password"
                        onChange={handleCreateAccountChange}
                        />
                    </div>
                    <div className="flex justify-center my-10">
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                        type="submit"
                        >
                        Create Account
                        </button>
                    </div>
                </form>
            </div>
    )
}