import { useState } from "react"

export function FollowersPage( {viewedUserDetails} ) {
    const [activeTab, setActiveTab] = useState("followers");

    return (
        <>
            <div className="flex w-full border">
                <div className="relative flex justify-center items-center h-12 w-1/2 hover:bg-green-100 hover:text-green-500">
                    <span className="text-gray-400 font-bold ">Followers</span>
                    <div className={`bottom-0 h-1 w-20 bg-green-500 rounded-full ${activeTab === 'followers' ? 'absolute' : 'hidden'}`}></div>
                </div>
                <div className="relative flex justify-center items-center h-12 w-1/2 hover:bg-green-100 hover:text-green-500">
                    <span className="text-gray-400 font-bold">Followers</span>
                    <div className={`bottom-0 h-1 w-20 bg-green-500 rounded-full ${activeTab === 'following' ? 'absolute' : 'hidden'}`}></div>
                </div>
            </div>
            <div id="followers-following-details">
                
            </div>
        </>
    )
}