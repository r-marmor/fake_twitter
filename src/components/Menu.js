import PropertiesBtn from "./buttons/PropertiesBtn";
import PostForm from "./forms/PostForm";
import { useAuth } from "../hooks/useAuth";

export default function Menu({  
    showPostForm, 
    setShowPostForm,
    handleProfileClick,
    images,
    setImages,
    userMessage,
    setUserMessage,
    showHomepage,
    showReplyForm
    }) 
{

    const [, userDetails] = useAuth();
    
    return (
        <>
            <div className="hidden relative md:pr-5 md:py-2 md:flex text-black flex-col justify-between w-auto h-screen">
                <ul className="lg:items-start">
                    <button className="flex justify-center items-center gap-2 mb-2 w-12 h-12 lg:w-full lg:justify-start lg:items-center lg:px-4 hover:bg-blue-100 hover:rounded-full">
                        <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 155.139 155.139">
                            <path d="M125.967,51.533V20.314h-16.862V38.06L77.569,12.814L0,74.869h21.361v67.455h112.416v-67.45h21.361
                                    L125.967,51.533z M125.925,134.472H97.546V82.37H57.58v52.103H29.202V71.146l48.356-38.689l48.355,38.689v63.326H125.925z"/>
                        </svg>
                        <h1 onClick={() => showHomepage()}
                            className="hidden lg:block text-xl">Home</h1>            
                    </button>
                    <button className="flex justify-center items-center mb-2 gap-2 w-12 h-12 lg:w-full lg:justify-start lg:items-center lg:px-4 hover:bg-blue-100 hover:rounded-full">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="hashIconTitle" stroke="#000000" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000"><path d="M11 3L5 21M19 3L13 21M3 16L19 16M5 8L21 8"/> </svg>
                        <h1 className="hidden lg:block text-xl">Explore</h1>
                    </button>
                    <button onClick={() => setShowPostForm(true) } className="hidden lg:block lg:w-full text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-full text-sm py-2.5 text-center">Post</button>
                    <button onClick={() => setShowPostForm(true)} className="md:block lg:hidden pl-2">
                        <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M33,48H4a4,4,0,0,1-4-4V20L13,9H33a4,4,0,0,1,4,4V44A4,4,0,0,1,33,48Z" fill="#e7e9e9"/><path d="M47.2,7.32L40.66,0.78a2.81,2.81,0,0,0-3.89,0l-18,18a2,2,0,0,0,0,2.8l7.62,7.63a2,2,0,0,0,1.4.58h0a2,2,0,0,0,1.4-.58l18-18A2.76,2.76,0,0,0,47.2,7.32Z" fill="#f9d74a"/><rect x="36.12" y="2.31" width="4.25" height="14.84" transform="translate(4.32 29.89) rotate(-44.98)" fill="#ec5044"/><path d="M29.26,26.4l-7.67-7.68a2,2,0,0,0-3.35,1.06l-1.64,9.32a2,2,0,0,0,2.29,2.29l9.32-1.65A2,2,0,0,0,29.26,26.4Z" fill="#edcabb"/><path d="M20.56,30.14l-2.71-2.72a0.57,0.57,0,0,0-.58-0.14,0.58,0.58,0,0,0-.4.45l-0.31,1.75a1.68,1.68,0,0,0,1.65,2l0.29,0,1.75-.31A0.58,0.58,0,0,0,20.56,30.14Z" fill="#4d4d4d"/><path d="M0,20H11a2,2,0,0,0,2-2V9Z" fill="#a1a3a4"/></svg>
                    </button>
                </ul>
                    <div className="hidden md:flex justify-between items-center w-full bg-slate-100 hover:bg-slate-200 focus:outline-none font-medium rounded-full px-5 py-2.5 text-sm text-center text-black">
                        <div onClick={() => handleProfileClick(userDetails?.userId)} className="flex flex-col items-start cursor-pointer">
                            <p className="font-bold">{userDetails? userDetails.username : 'Loading...'}</p>
                            <p className="text-gray-400">{userDetails? '@' + userDetails.tagname : '...'}</p>
                        </div>
                        <PropertiesBtn />
                    </div>
            </div>
        </>
    )
}