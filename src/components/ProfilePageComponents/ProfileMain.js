import { useAuth } from "../useAuth"

export function ProfileMain( { viewedUserDetails, toggleFollowBtn } ) {
    const [user, ] = useAuth();

    return (
        <div id="profileMainContent">
            <div id="coverImage" className="border h-48"><img src="#"></img></div>
            <div className="relative">
                <img src={viewedUserDetails.profileImgUrl} alt="profile" className="absolute -top-16 ml-5 w-32 h-32 rounded-full object-cover"></img>
                <button onClick={() => toggleFollowBtn(user.uid, viewedUserDetails.userId)} type="button" className="py-2.5 px-5 w-32 absolute right-4 mr-2 mt-4 text-sm font-medium text-green-500 focus:outline-none bg-white rounded-full border border-green-500 hover:bg-green-800">Follow</button>
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
                    <div className="flex gap-4 text-md text-gray-400">
                        <p className="hover:underline">{viewedUserDetails.following.length} following</p>
                        <p className="hover:underline">{viewedUserDetails.followers.length} followers</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}