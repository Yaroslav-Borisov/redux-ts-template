import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"
import { PostItem } from "./PostItem"

export const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    // eslint-disable-next-line no-empty-pattern
    const [createPost, {}] = postAPI.useCreatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: 'yarik'} as IPost)
    }
    
    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h3>Идёт загрузка постов...</h3>}
            {error && <h3>Произошла ошибка...</h3>}
            {posts && posts.map(post => <PostItem post={post} key={post.id}/>)}
        </div>
    )
}