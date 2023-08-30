import { useReply } from "../../hooks/useReply"

export function TweetReplyForm({
    mode,
    user, 
    userDetails, 
    isTextareaFocused, 
    setIsTextareaFocused, 
    selectedTweetData
}) {
    
    const { 
        userReplyMessage,
        setUserReplyMessage,
        handleReplySubmit
    } = useReply(user, userDetails, selectedTweetData)


    return (
        <>
            <div className="w-fit">
                <img className="w-14 h-14 rounded-full object-cover" src={userDetails?.profileImgUrl} alt="profileimage"></img>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <h4 className={`text-sm ${isTextareaFocused ? 'block' : 'hidden'}`}>
                    {mode === "reply" ? 'Replying to ' : ''}
                    <span className="text-blue-500 pt-2">@{selectedTweetData?.tagname}</span>
                </h4>
                <form onSubmit={handleReplySubmit}>
                    <textarea 
                        placeholder="Post your reply!"
                        value={userReplyMessage}
                        onChange={(e) => setUserReplyMessage(e.target.value)}
                        className="bg-color-default block w-full border border-transparent rounded-md text-lg focus:outline-none" 
                        rows="2"
                        onFocus={() => setIsTextareaFocused(true)}
                    >
                    </textarea>
                    <div className="flex justify-end">
                        <button type="submit" className="py-2 px-5 mt-4 inline-flex justify-center items-center rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-all text-sm">
                            Reply
                        </button>
                    </div> 
                </form>  
            </div>
        </>
    )
}