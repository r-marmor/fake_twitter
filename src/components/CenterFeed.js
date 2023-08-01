import SearchBar from "./SearchBar";
import ProfileImg1 from "../images/profile1.jpg"
import TweetMenu from "./TweetMenu";

export default function CenterFeed() {
    return (
        <div className="border border-gray-300 w-4/6">
            <SearchBar />
            <div className="p-2 border-4">
                <div className="flex">
                    <img src={ProfileImg1} className="rounded-full w-12 h-12"  alt="profile"></img>
                    <div className="flex flex-col gap-1 px-4 w-full">
                        <div className="flex gap-2">
                            <p className="font-bold">UserName</p>
                            <p>@tag</p>
                            <p>Sun Jan 03 2023</p>
                        </div>
                        <p>"Hey!"</p>
                        <TweetMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}