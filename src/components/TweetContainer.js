import ProfileImg1 from "../images/profile1.jpg"
import TweetMenu from "./TweetMenu";
import PropertiesBtn from "./buttons/PropertiesBtn";

export default function TweetContainer({ username, tag, timestamp, text }) {
    return (
        <div className="p-2 border-b">
                <div className="flex">
                    <div className="w-fit">
                        <img src={ProfileImg1} className="rounded-full w-14 h-14 object-cover"  alt="profile"></img>
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
                        <p>{text}</p>
                        <TweetMenu />
                    </div>
                </div> 
            </div>
    )
}