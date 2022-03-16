import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import { SinglePostContext } from "../../contexts/SinglePostContext";
import { ISinglePostContext } from "../../types/posts";
import DeleteIcon from '@mui/icons-material/Delete';
import AddComment from "./AddComment";
import axios from "axios";
import { toast } from "react-toastify";

 
const CommentsList: FunctionComponent = () => {
    const { post, deleteComment } = useContext(SinglePostContext) as ISinglePostContext;

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3001/comments/${id}`);
            deleteComment(id);
            toast.success('Comment deleted successfully');
        } catch (e: any) {
            if(e.response?.status === 400) {
                e.response.data.errors?.map((error: {msg: string}) => toast.error(error.msg));
            } else {
                toast.error('Some Error Happened!');
            }
        }
    }

    return (
        <>
            <List>
                {post?.comments.map(comment => {
                    return <ListItem key={comment.id} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(comment.id)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemText 
                            primary={`Username - ${comment.created_at}`} 
                            secondary={comment.body} 
                        />
                    </ListItem>
                })}
            </List>

            <AddComment />
        </>
    );
}
 
export default CommentsList;