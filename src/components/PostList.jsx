import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
    const { postList } = useContext(PostListData)
    return (
        <>
            {postList.map(item => (<Post key={item.id} post={item}></Post>))}
        </>
    )

}

export default PostList;