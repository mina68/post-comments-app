import { createContext, FunctionComponent } from "react";
import useFetch from "../hooks/useFetch";
import { IPost, IPostsContext } from "../types/posts";

export const PostsContext = createContext<IPostsContext | null>(null);

const PostsContextProvider: FunctionComponent = (props) => {
    const {data: posts, setData: setPosts, error, isPending} = useFetch<IPost[]>('http://localhost:3001/posts');

    const deletePost = (id: number) => {
        setPosts(posts?.filter(post => post.id !== id));
    }
    return (
        <PostsContext.Provider value={{posts, deletePost, error, isPending}}>
            {props.children}
        </PostsContext.Provider>
    );
}
 
export default PostsContextProvider;