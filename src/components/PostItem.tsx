import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"

interface PostItemProps {
    post: IPost
}

export const PostItem = ({post}: PostItemProps) => {
    // eslint-disable-next-line no-empty-pattern
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    
    const handleClick = async (event: React.MouseEvent) => {
        event.stopPropagation()
        await deletePost(post)
    }
    
    return (
        <div className="post">
            {post.id}. {post.title}
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}