import { useEffect, useRef, useState } from "react";
import TweetContainer from "./TweetContainer";

export default function ProfilePage({ 
    setShowProfilePage, 
    viewedUserDetails,
    tweets,
    handleProfileClick,
    toggleLike,
    }) {

    const [displayedContent, setDisplayedContent] = useState("tweets");

    const tweetButtonRef = useRef(null);

    useEffect(() => {
        if (tweetButtonRef.current) {
            tweetButtonRef.current.focus();
        }
    }, []);

    return (
        <div id="profileContainer" className="border-x border-gray-300 text-black w-full md:w-5/6 lg:w-4/6">
            <div id="profileHeader" className="sticky flex gap-5 items-center px-5 border h-20">
                <svg onClick={() => setShowProfilePage(false)}
                     className="cursor-pointer"
                     width="30px" 
                     height="30px" 
                     viewBox="0 0 24 24" 
                     xmlns="http://www.w3.org/2000/svg"
                     >
                    <rect id="view-box" width="24" height="24" fill="#141124" opacity="0"/>
                    <path id="Shape" d="M4.22,9.28l-4-4L.207,5.267.2,5.261.194,5.254.187,5.246.182,5.24.174,5.231l0,0-.008-.01,0,0L.151,5.2l0,0L.14,5.186l0,0L.13,5.172l0,0L.12,5.157l0-.006L.111,5.142l0-.007,0-.008L.1,5.118l0-.006L.087,5.1l0,0A.751.751,0,0,1,.235,4.2L4.22.22A.75.75,0,0,1,5.28,1.281L2.561,4H14.75a.75.75,0,0,1,0,1.5H2.561L5.28,8.22A.75.75,0,1,1,4.22,9.28Z" transform="translate(4.25 7.25)" fill="#00FF00"/>
                </svg>
                <div>
                    <h1 className="font-bold text-black text-lg">{viewedUserDetails.username}</h1>
                    <p className="font-gray-200 text-sm">{viewedUserDetails.totalTweets} tweets</p>
                </div>
            </div>
            <div id="profileMainContent">
                <div id="coverImage" className="border h-48"><img src="#"></img></div>
                <div className="relative">
                    <img src={viewedUserDetails.profileImgUrl} alt="profile" className="absolute -top-16 ml-5 w-32 h-32 rounded-full object-cover"></img>
                    <button type="button" className="py-2.5 px-5 w-32 absolute right-4 mr-2 mt-4 text-sm font-medium text-green-500 focus:outline-none bg-white rounded-full border border-green-500 hover:bg-green-800">Follow</button>
                    <div className="h-20"></div>
                    <div className="flex flex-col gap-2 mb-8 ml-5">
                        <h1 className="text-black font-bold text-xl">{viewedUserDetails.username}</h1>
                        <p className="text-xs text-gray-400">@{viewedUserDetails.tagname}</p>
                        <p className="text-md text-gray-400">
                            {viewedUserDetails.subscriptionDate.toDate().toLocaleDateString("FR", {
                            year: "numeric", 
                            month: "long", 
                            day: "numeric"
                        })}</p>
                        <p className="text-md text-gray-400">number of followers</p>
                    </div> 
                </div>
            </div>
            <div id="profileMenu" className="flex w-full justify-between text-center font-bold cursor-pointer">
                <button id="tweets" onClick={() => setDisplayedContent("tweets")} ref={tweetButtonRef} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:outline-none focus:border-b-2 focus:border-green-500 focus:text-green-500">Tweets</button>
                <button id="response" onClick={() => setDisplayedContent("response")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Réponses</button>
                <button id="medias" onClick={() => setDisplayedContent("medias")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Médias</button>
                <button id="likes" onClick={() => setDisplayedContent("likes")} className="w-1/4 py-2 hover:text-green-500 hover:bg-green-200 focus:border-b-2 focus:border-green-500 focus:text-green-500">Likes</button>
            </div>
            <div id="menuContainer" className="border-t">
                {displayedContent === "tweets" && 
                    tweets
                        .filter(tweet => tweet.userId === viewedUserDetails.userId)
                        .map((tweet) => (
                            <TweetContainer
                                key={tweet.timestamp}
                                profileImg={tweet.profileImgUrl}
                                username={tweet.username}
                                tag={tweet.tagname}
                                timestamp={tweet.timestamp}
                                text={tweet.userMessage}
                                tweetLikes={tweet.likes}
                                tweetId={tweet.tweetId}
                                imagesUrl={tweet.imagesUrl}
                                userId={tweet.userId}
                                handleProfileClick={handleProfileClick}
                                toggleLike={toggleLike}
                            />
                        ))
                }
                {displayedContent === "likes" && 
                    tweets
                    .filter(tweet => viewedUserDetails.likedTweetsId.includes(tweet.tweetId))
                    .map((tweet) => (
                        <TweetContainer
                            key={tweet.timestamp}
                            profileImg={tweet.profileImgUrl}
                            username={tweet.username}
                            tag={tweet.tagname}
                            timestamp={tweet.timestamp}
                            text={tweet.userMessage}
                            tweetLikes={tweet.likes}
                            tweetId={tweet.tweetId}
                            imagesUrl={tweet.imagesUrl}
                            userId={tweet.userId}
                            handleProfileClick={handleProfileClick}
                            toggleLike={toggleLike}
                        />
                    ))
                }
            </div>
        </div>
    )
}