import profile1img from "../images/profile1.jpg"
import profile2img from "../images/profile2.jpg"


export const users = [
    {
        profileImgUrl : profile1img,
        userId: 123456789,
        username: "profile1",
        tagname: "PROFILE1",
        subscriptionDate: "17 aout 2023",
        followers: [],
        following: [],
        likedTweetsId: [],
        totalTweets: 0
    },
    {
        profileImgUrl : profile2img,
        userId: 987654321,
        username: "profile2",
        tagname: "PROFILE2",
        subscriptionDate: "18 aout 2023",
        followers: [],
        following: [],
        likedTweetsId: [],
        totalTweets: 0
    }

]

export const posts = [
    {
        profileImgUrl: "",
        userId: "",
        likes: [],
        postId: "6c24ff06-3d05-11ee-be56-0242ac120002",
        username: "",
        tagname: "",
        userMessage: "",
        imagesUrl: "",
        timestamp: new Date().getTime()
    }
]

