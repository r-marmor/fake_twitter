import { ReplyBtnForm } from "./ReplyBtnForm";
import PostForm from "./forms/PostForm";

export function Overlay({ 
    show, 
    showPostForm, 
    showReplyForm, 
    children, 
    images,
    setShowPostForm,
    userMessage,
    setUserMessage,
    setImages,
    setShowReplyForm,
    tweetData
 }) {
    if (!show) return null;

    return (
            <>
                <div id="overlay" className={`absolute z-10 bg-black w-screen h-screen top-0 left-0 opacity-70 ${show ? 'md:block' : 'hidden'} `}></div>
                {showReplyForm && <ReplyBtnForm setShowReplyForm={setShowReplyForm} tweetData={tweetData} />}
                {showPostForm &&
                    <PostForm 
                        setShowPostForm={setShowPostForm}
                        images={images}
                        setImages={setImages}
                        userMessage={userMessage}
                        setUserMessage={setUserMessage} 
                        showPostForm={showPostForm}
                        
                    />}  
                {children}
            </>
    )
}