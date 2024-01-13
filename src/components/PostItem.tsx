import { IPost } from "../models/IPost"

interface PostItemProps {
    post: IPost
}

export const PostItem = ({post}: PostItemProps) => {
    return (
        <div className="post">
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    )
}