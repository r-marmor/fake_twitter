import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase";

export default function LoginForm( { setShowLoginForm } ) {
       const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;

        try {
        await signInWithEmailAndPassword(auth, email, password);
        // Logged in successfully
        } catch (error) {
        console.error("Error logging in:", error.message);
        }
    }

    return (
        <div className={`w-screen h-screen flex flex-col items-center justify-center px-5 py-10 z-20 md:absolute md:border md:top-0 md:inset-x-1/3 md:mt-48 md:rounded-lg bg-black text-white md:w-96 md:h-96 md:py-4 md:px-14`}>
                <button onClick={() => setShowLoginForm(false)} className="absolute top-5 left-5 hover:bg-slate-100 rounded-full">
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8L8 16M8.00001 8L16 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h1 className="font-bold text-center text-xl mb-10">Connectez vous à <br></br> *APP-NAME*</h1>
                <form onSubmit={handleLoginSubmit} className="w-full max-w-sm">
                    <div className="mb-4">
                        <input
                        name="email"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="email"
                        placeholder="email"
                        onChange={handleLoginChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        name="password"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="password"
                        placeholder="enter password"
                        onChange={handleLoginChange}
                        />
                    </div>
                    <div className="flex justify-center mt-10">
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                        type="submit"
                        >
                        Se connecter
                        </button>
                    </div>
                </form>
        </div>
    )
}