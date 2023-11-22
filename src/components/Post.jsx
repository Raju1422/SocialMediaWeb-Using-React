import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
    const { deletePost } = useContext(PostList);
    return (
        <div className="card post-card" style={{ width: " 35rem " }}>
            <div className="card-body">
                <h5 className="card-title">{post.title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                    <MdDelete />
                </span></h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map(item => <span key={item} className="badge rounded-pill text-bg-primary hashtag">#{item}</span>)}
                <div className="alert alert-success reactions" role="alert">
                    This is post is reacted by {post.reactions} people
                </div>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default Post;