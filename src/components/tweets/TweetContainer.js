import TweetMenu from "./TweetMenu";
import PropertiesBtn from "../buttons/PropertiesBtn";

export default function TweetContainer({
    profileImg, 
    username, 
    tag, 
    timestamp, 
    text,
    tweetLikes,
    tweetId,
    userId,
    imagesUrl,
    handleProfileClick,
    toggleLike,
    tweets,
    tweetData,
    isTextareaFocused,
    setIsTextareaFocused,
    fetchTweetData,
    showPostForm,
    setShowPostForm,
    showReplyForm,
    setShowReplyForm
    }) 
{
    return (
        <div className="px-2 pt-4 border-b">
                <div className="flex">
                    <div className="w-fit">
                        <img onClick={() => handleProfileClick(userId)} src={profileImg} className="rounded-full w-14 h-14 object-cover cursor-pointer"  alt="profile"></img>
                    </div>
                    <div className="flex flex-col gap-1 px-4 w-full">
                        <div className="flex justify-between">
                            <div className="flex gap-2 pt-2">
                                <p className="font-bold">{username}</p>
                                <p>@{tag}</p>
                                <p className="">{new Date(timestamp).toDateString()}</p>
                            </div>
                            <button className="flex justify-center items-center w-10 h-10 hover:bg-blue-100 hover:rounded-full">
                                <PropertiesBtn />
                            </button>
                        </div>
                        <div className="flex flex-col items-start gap-5">
                            <div className="grid grid-cols-2 gap-1">
                                {imagesUrl && imagesUrl.length > 0 && imagesUrl.map((url, index) => (
                                <img key={index} src={url} alt="uploaded-content" className="rounded-lg max-h-60 object-cover mt-6"></img>
                            ))}
                            </div>
                            <p>{text}</p>
                        </div>
                        <TweetMenu 
                            tweetLikes={tweetLikes} 
                            toggleLike={toggleLike} 
                            tweetId={tweetId} 
                            tweets={tweets}
                            tweetData={tweetData}
                            isTextareaFocused={isTextareaFocused}
                            setIsTextareaFocused={setIsTextareaFocused}
                            fetchTweetData={fetchTweetData}
                            showPostForm={showPostForm}
                            setShowPostForm={setShowPostForm}
                            showReplyForm={showReplyForm}
                            setShowReplyForm={setShowReplyForm}
                        />
                    </div>
                </div> 
            </div>
    )
}