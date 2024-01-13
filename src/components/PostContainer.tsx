import { postAPI } from "../services/PostService"
import { PostItem } from "./PostItem"

export const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            {isLoading && <h3>Идёт загрузка постов...</h3>}
            {error && <h3>Произошла ошибка...</h3>}
            {posts && posts.map(post => <PostItem post={post} key={post.id}/>)}
        </div>
    )
}