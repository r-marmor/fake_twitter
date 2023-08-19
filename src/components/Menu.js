import { useAuth } from "../hooks/useAuth";

export default function Menu({  
    setShowPostForm,
    handleProfileClick,
    showHomepage
    }) 
{

    const [, userDetails, logout] = useAuth();
    
    return (
        <>
            <div className="hidden relative md:flex flex-col md:px-3 justify-between items-start text-black w-1/12 lg:w-48 h-screen">
                <ul className="flex flex-col gap-1 pt-4 items-start w-full">
                    <svg className="cursor-pointer"
                         onClick={() => showHomepage()}
                         width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                         <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14.035 44.508h-5.65V26.882c0-.564.008-1.355.02-2.372c.014-1.018.02-1.802.02-2.353l-5.498 24.351h-5.893l-5.459-24.351c0 .551.006 1.335.02 2.353c.014 1.017.02 1.808.02 2.372v19.626h-5.65V17.492h8.824l5.281 22.814l5.242-22.814h8.725v29.016z" fill="#000000"></path>
                    </svg>
                    <button className="flex justify-center items-center gap-2 mb-2 w-12 h-12 lg:w-full lg:justify-start lg:items-center hover:bg-blue-100 hover:rounded-full">
                        <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 155.139 155.139">
                            <path d="M125.967,51.533V20.314h-16.862V38.06L77.569,12.814L0,74.869h21.361v67.455h112.416v-67.45h21.361
                                    L125.967,51.533z M125.925,134.472H97.546V82.37H57.58v52.103H29.202V71.146l48.356-38.689l48.355,38.689v63.326H125.925z"/>
                        </svg>
                        <h1 onClick={() => showHomepage()}
                            className="hidden lg:block text-xl">Home</h1>            
                    </button>
                    <button className="flex justify-center items-center mb-2 gap-2 w-12 h-12 lg:w-full lg:justify-start lg:items-center hover:bg-blue-100 hover:rounded-full">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="hashIconTitle" stroke="#000000" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000"><path d="M11 3L5 21M19 3L13 21M3 16L19 16M5 8L21 8"/> </svg>
                        <h1 className="hidden lg:block text-xl">Explore</h1>
                    </button>
                    <button onClick={() => setShowPostForm(true) } className="hidden lg:block lg:w-full text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-full text-sm py-2.5 text-center">Post</button>
                    <button onClick={() => setShowPostForm(true)} className="md:block lg:hidden pl-2">
                        <svg viewBox="-8 0 40 24" aria-hidden="true" className="bg-blue-400 text-white w-10 h-10 rounded-full"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
                    </button>
                </ul>
                {userDetails && 
                    <div className="flex justify-center hs-dropdown relative mb-2 w-full">
                        <img className="hs-dropdown-toggle w-10 h-10 object-cover rounded-full " src={userDetails?.profileImgUrl} alt="profile menu"></img>
                        <div className="hs-dropdown-menu z-50 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-10 hidden min-w-[7rem] bg-slate-200 shadow-md rounded-lg p-2 mt-2" aria-labelledby="hs-dropdown-custom-trigger">
                            <p onClick={() => handleProfileClick(userDetails.userId)}
                            className="flex items-center w-fit cursor-pointer gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-slate-100" href="#">
                            Profile page
                            </p>
                            <p onClick={() => logout()}
                            className="flex items-center w-fit cursor-pointer gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-slate-100" href="#">
                            Log out
                            </p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}