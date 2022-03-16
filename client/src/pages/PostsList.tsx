import { Container } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import PostsTable from "../components/posts/PostsTable";
import { PostsContext } from "../contexts/PostsContext";
import { IPostsContext } from "../types/posts";

const PostsList: FunctionComponent = () => {

    const { isPending } = useContext(PostsContext) as IPostsContext;

    return (
        <Container component="main" maxWidth="lg">
            {isPending && 'loading...'}
            {!isPending && <PostsTable />}
        </Container>
    );
}
 
export default PostsList;