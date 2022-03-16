import { Card, CardContent, Container, Divider, Typography } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import CommentsList from "../components/comments/CommentsList";
import { SinglePostContext } from "../contexts/SinglePostContext";
import { ISinglePostContext } from "../types/posts";

interface ViewPostProps {
    
}
 
const ViewPost: FunctionComponent<ViewPostProps> = () => {
    const { post } = useContext(SinglePostContext) as ISinglePostContext;

    return (
        <Container component="main" maxWidth="md">
            <Card sx={{my: 4}}>
                <CardContent>

                    <Typography gutterBottom variant="h3" component="div">
                    {post?.title}
                    </Typography>
                    <Typography variant="body2" color="text.primary">{post?.body}</Typography>
                    <Divider variant="inset" component="div" sx={{my: 3}}/>

                    <Typography gutterBottom variant="h5" component="div">Comments</Typography>
                    <CommentsList/>

                </CardContent>
            </Card>
        </Container>
    );
}
 
export default ViewPost;