import { useAuth } from "../../hooks/useAuth";

export default function TweetMenu({ 
    postLikes, 
    toggleLike, 
<<<<<<< HEAD
    postId, 
    post,
    postData,
=======
    tweetId, 
    tweetData,
>>>>>>> recovery-branch
    isTextareaFocused,
    setIsTextareaFocused,
    fetchPostsData,
    setShowReplyForm
}) {
        const [, userDetails ] = useAuth();
        
    return (
        <>
            <div className="w-full flex justify-between items-center mt-2">
                 <button id="replyBtn"
                    onClick={(e) => {
                    e.stopPropagation()
                    fetchPostsData('posts', postId)
                    setShowReplyForm(true)}
                    } 
                    className="flex justify-center items-center w-10 h-10 hover:bg-blue-100 hover:rounded-full">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button> 

                <button id="quoteBtn"
                        className="flex justify-center items-center w-10 h-10 hover:bg-green-100 hover:rounded-full">
                    <svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><path d="M52.94,42.93V18.3a5.54,5.54,0,0,0-5.54-5.54H11.83"/><path d="M11.83,20.14V44.77a5.54,5.54,0,0,0,5.54,5.54H52.94"/><polyline points="4.15 26.39 12.09 20.14 19.51 26.88"/><polyline points="60.36 36.12 52.91 42.94 45 36.76"/></svg>
                </button>
                <div className="flex items-center gap-2">
                    <button id="likesBtn"
<<<<<<< HEAD
                            onClick={(event) => toggleLike(event, postId, userDetails.userId, post)}
=======
                            onClick={(event) => toggleLike(event, tweetId, userDetails.userId, tweetData)}
>>>>>>> recovery-branch
                            className="flex justify-center items-center w-10 h-10 hover:bg-red-100 hover:rounded-full">
                        <svg className="" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                            width="25px" height="25px" viewBox="0 0 32 32">
                            <path d="M10.5,8v2C9.122,10,8,11.121,8,12.5H6C6,10.019,8.019,8,10.5,8z"/>
                            <path d="M21.5,5c-2.116,0-4.093,0.881-5.5,2.406C14.593,5.881,12.616,5,10.5,5C6.364,5,3,8.333,3,12.5
                                C3,21.542,16,27,16,27s13-5.458,13-14.5C29,8.333,25.636,5,21.5,5z M16,24.797C13.378,23.521,5,18.938,5,12.5
                                C5,9.467,7.467,7,10.5,7c1.55,0,2.982,0.626,4.03,1.762l0.735,0.797h1.47l0.735-0.797C18.518,7.626,19.95,7,21.5,7
                                c3.033,0,5.5,2.467,5.5,5.5C27,18.938,18.622,23.521,16,24.797z"/>
                        </svg>
                    </button>
<<<<<<< HEAD
                    <p>{postLikes.length}</p>
=======
                    <p>{tweetLikes?.length}</p>
>>>>>>> recovery-branch
                </div>
                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path id="link" d="M31.413,26.463c3.991,1.537 7.262,5.189 7.43,9.714c0.239,6.468 -6.379,11.427 -11.701,16.688c-2.086,2.009 -4.942,3.153 -7.842,3.135c-8.317,-0.155 -14.62,-11.625 -7.763,-18.74c3.923,-3.972 7.61,-8.964 11.931,-10.816c0.337,-0.145 0.681,-0.268 1.028,-0.371c0.016,1.283 0.124,2.918 0.495,4.281c-0.7,0.283 -1.356,0.69 -1.933,1.232c-4.472,4.311 -10.91,8.453 -10.504,13.891c0.257,3.451 3.395,6.412 6.969,6.39c1.757,-0.033 3.469,-0.744 4.732,-1.96c5.087,-5.029 12.486,-10.214 9.87,-16.115c-0.515,-1.162 -1.386,-2.1 -2.445,-2.767c-0.279,-1.209 -0.513,-2.876 -0.267,-4.562Zm1.174,11.045c-3.991,-1.537 -7.262,-5.189 -7.43,-9.715c-0.239,-6.467 6.379,-11.426 11.701,-16.688c2.086,-2.008 4.942,-3.152 7.842,-3.134c8.317,0.154 14.62,11.624 7.763,18.739c-3.923,3.972 -7.61,8.964 -11.931,10.816c-0.337,0.145 -0.681,0.268 -1.028,0.371c-0.016,-1.283 -0.124,-2.918 -0.495,-4.28c0.7,-0.283 1.356,-0.691 1.933,-1.233c4.472,-4.311 10.91,-8.453 10.504,-13.891c-0.257,-3.45 -3.395,-6.412 -6.969,-6.389c-1.757,0.032 -3.469,0.744 -4.732,1.96c-5.087,5.028 -12.486,10.213 -9.87,16.114c0.515,1.163 1.386,2.1 2.445,2.768c0.279,1.208 0.513,2.876 0.267,4.562Z"/>
                </svg>
            </div>
        </>
    )
}