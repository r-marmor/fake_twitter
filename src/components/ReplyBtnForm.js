import { useAuth } from "../hooks/useAuth"
import { useReply } from "../hooks/useReply";

export function ReplyBtnForm( {setShowReplyForm, tweetData} ) {
    const [user, userDetails] = useAuth();

    const { 
        userReplyMessage,                   
        setUserReplyMessage,
        handleReplySubmit
    } = useReply(user, userDetails, tweetData, () => setShowReplyForm(false));
    
    return (
        <>
            {tweetData && (
                <div id="replyContainer" className={`flex flex-col text-black w-screen h-screen justify-start px-5 pt-10 z-20 absolute md:border top-0 md:inset-x-1/3 md:justify-center md:h-auto md:mt-48 md:rounded-lg bg-slate-200 md:w-1/2 xl:w-5/12 2xl:w-4/12 md:px-4`}>
                    {/* Close button */}
                    <button onClick={() => setShowReplyForm(false)} className="absolute top-2 left-3 hover:bg-slate-100 rounded-full"     
                    >
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8L8 16M8.00001 8L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div id="milieu" className="flex gap-10">
                        <div className="flex flex-col items-center">
                            <img className="w-14 h-14 object-cover rounded-full" src={tweetData.profileImgUrl} alt="reply profile"></img>
                            <div className="h-full w-px bg-gray-500 mt-2"></div>
                        </div>
                        <div className="w-full">
                            <p className="font-bold">{tweetData.username} <span className="text-gray-600 font-normal">@{tweetData.tagname}</span></p>
                            <p className="mb-4">{tweetData.userMessage}</p>
                            <p className="text-gray-600 text-sm">Replying to <span className="text-blue-500">@{tweetData.tagname}</span></p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={userDetails?.profileImgUrl} alt="profileimg" className="w-14 h-14 rounded-full object-cover mt-4"></img>
                        <form onSubmit={handleReplySubmit} className="w-full bg-slate-200 p-4 rounded-lg">
                        <div className="mb-4">
                            <textarea
                            name="userReplyMessage"
                            value={userReplyMessage}
                            onChange={(e) => setUserReplyMessage(e.target.value)}
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                            placeholder="Post your reply!"
                            rows="4"
                            />
                        </div>
                        <div className="flex justify-end mt-2">
                            <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                            type="submit"
                            >
                            Reply
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            )}
    </>
    )
}