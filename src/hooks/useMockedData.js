import { useEffect, useState } from "react";
import { users, posts } from "../components/mockedData"

export function useMockedData() {
    const [mockedUsersData, setMockedUsersData] = useState(null);
    const [mockedPostsData, setMockedPostsData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setMockedUsersData(users);
        }, 500);
        setTimeout(() => {
            setMockedPostsData(posts);
        }, 600);
    }, []);

    const createPost = (post) => {
        posts.push(post);

        setMockedPostsData([...posts]);
    }

    return {
        mockedUsersData,
        mockedPostsData,
        createPost
    }
}