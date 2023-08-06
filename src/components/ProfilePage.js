export default function ProfilePage({ 
    userDetails, 
    setShowProfilePage, 
    viewedUserDetails 
    }) 
{
    return (
        <div id="profileContainer" className="border-x border-gray-300 w-full md:w-5/6 lg:w-4/6">
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
                    <p className="font-gray-200 text-xs">44 tweets</p>
                </div>
            </div>
            <img src={viewedUserDetails.profileImgUrl} alt="profile" className="w-32 h-32 rounded-full object-cover"></img>
            <div>
                <div className="flex justify-between w-full">
                    <img src="#"></img>
                    <button>Follow</button>
                </div>
                <div>
                    <h1>{viewedUserDetails.username}</h1>
                    <p>@{viewedUserDetails.tagname}</p>
                    <p>subscription date</p>
                    <p>number of followers</p>
                    <p></p>
                </div>
            </div>
            <div id="profileMenu" className="flex gap-5">
                <p>Tweets</p>
                <p>Tweets & replies</p>
                <p>Media</p>
                <p>Likes</p>
            </div>
            <div id="menuContainer">

            </div>
        </div>
    )
}