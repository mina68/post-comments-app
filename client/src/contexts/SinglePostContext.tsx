import { createContext, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IComment, IPost, ISinglePostContext } from "../types/posts";

export const SinglePostContext = createContext<ISinglePostContext | null>(null);

const SinglePostContextProvider: FunctionComponent = (props) => {

    const { id } = useParams();
    const { data: post, setData: setPost, error, isPending } = useFetch<IPost>('http://localhost:3001/posts/' + id);

    const deleteComment = (id: number) => {
        if(post) {
            const comments = post?.comments.filter(comment => comment.id !== id) as IComment[];
            setPost({...post, comments});
        }
    }

    const addComment = (comment: IComment) => {
        if(post) {
            setPost({...post, comments: [...post.comments, comment]});
        }
    }

    return (
        <SinglePostContext.Provider value={{post, deleteComment, addComment, error, isPending}}>
            {props.children}
        </SinglePostContext.Provider>
    );
}
 
export default SinglePostContextProvider;