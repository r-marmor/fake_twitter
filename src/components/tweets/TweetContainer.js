import TweetMenu from "./TweetMenu";
import PropertiesBtn from "../buttons/PropertiesBtn";

export default function TweetContainer({
    profileImgUrl, 
    username, 
    tagname, 
    timestamp, 
<<<<<<< HEAD
    text,
    postLikes,
    postId,
=======
    userMessage,
    tweetLikes,
    tweetId,
>>>>>>> recovery-branch
    userId,
    imagesUrl,
    handleProfileClick,
    toggleLike,
    post,
    postData,
    isTextareaFocused,
    setIsTextareaFocused,
    fetchPostsData,
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
                        <img onClick={() => handleProfileClick(userId)} src={profileImgUrl} className="rounded-full w-14 h-14 object-cover cursor-pointer"  alt="profile"></img>
                    </div>
                    <div className="flex flex-col gap-1 px-4 w-full">
                        <div className="flex justify-between">
                            <div className="flex gap-2 pt-2">
                                <p className="font-bold">{username}</p>
                                <p>@{tagname}</p>
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
                            <p>{userMessage}</p>
                        </div>
                        <TweetMenu 
                            postLikes={postLikes} 
                            toggleLike={toggleLike} 
                            tweetId={postId} 
                            post={post}
                            postData={postData}
                            isTextareaFocused={isTextareaFocused}
                            setIsTextareaFocused={setIsTextareaFocused}
                            fetchPostsData={fetchPostsData}
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