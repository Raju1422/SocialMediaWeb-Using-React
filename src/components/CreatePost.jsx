import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostList)
    const userId = useRef();
    const postTitle = useRef();
    const postContent = useRef();
    const postReactions = useRef();
    const postTags = useRef();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const Id = userId.current.value;
        const title = postTitle.current.value;
        const content = postContent.current.value;
        const reactions = postReactions.current.value;
        const tags = postTags.current.value.split(" ");
        addPost(Id, title, content, reactions, tags);
        userId.current.value = "";
        postTitle.current.value = "";
        postContent.current.value = "";
        postReactions.current.value = "";
        postTags.current.value = "";


    }

    return (
        <form className="create-post" onSubmit={handleOnSubmit}>
            <div className=
                "mb-3">
                <label htmlFor="userId" className=
                    "form-label">Enter your User id </label>
                <input type="text" className=
                    "form-control" id="userId" placeholder="Your user id" ref={userId} />
            </div>
            <div className=
                "mb-3">
                <label htmlFor="title" className=
                    "form-label">Post Title</label>
                <input type="text" className=
                    "form-control" id="title" placeholder="Enter title of Post" ref={postTitle} />
            </div>

            <div className=
                "mb-3">
                <label htmlFor="content" className=
                    "form-label">Post Content</label>
                <textarea type="text" rows="4" className=
                    "form-control" id="content" placeholder="Enter content of Post" ref={postContent} />
            </div>
            <div className=
                "mb-3">
                <label htmlFor="reactions" className=
                    "form-label">Number of reactions </label>
                <input type="text" rows="4" className=
                    "form-control" id="reactions" placeholder="Enter number of reactions" ref={postReactions} />
            </div>
            <div className=
                "mb-3">
                <label htmlFor="tags" className=
                    "form-label">Enter your tags  </label>
                <input type="text" rows="4" className=
                    "form-control" id="tags" placeholder="Please enter your tags using space " ref={postTags} />
            </div>
            <button type="submit" className=
                "btn btn-primary">Post</button>
        </form>
    )
}

export default CreatePost;