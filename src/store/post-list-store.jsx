import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

// independent of function 
const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currentPostList.filter(item => item.id != action.payload.postId)
    }
    else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currentPostList]
    }
    return newPostList;
}


const PostListProvider = ({ children }) => {
    const addPost = (userId, title, body, reactions, tags) => {
        console.log(userId)
        disptachPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title,
                body,
                reactions,
                userId,
                tags
            },
        })
    }
    const deletePost = (Id) => {
        disptachPostList({
            type: "DELETE_POST",
            payload: {
                postId: Id
            },
        })
    }
    const [postList, disptachPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
    return <PostList.Provider value={{ postList, deletePost, addPost }}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = [{
    id: "1",
    title: "Virat Kohli - The King ",
    body: "Virat Kohli called as King Of cricket Now broken the record of God Of Cricket ",
    reactions: 100,
    userId: "santosh1422",
    tags: ["virat Kohli", "Sachin", "Cricket"]
},
{
    id: "2",
    title: "Australia - The Champions",
    body: "Australia beat India and lift the 6th world cup trophy !! ",
    reactions: 50,
    userId: "santosh1422",
    tags: ["WorldCup", "Australia", "India"]
}]

export default PostListProvider;