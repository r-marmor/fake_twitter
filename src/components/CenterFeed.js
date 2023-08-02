import TweetContainer from "./TweetContainer";


export default function CenterFeed() {
    return (
        <div className="relative border-x border-gray-300 w-full md:w-5/6 lg:w-4/6">
            
            <TweetContainer />
            <TweetContainer />
        </div>
    )
}