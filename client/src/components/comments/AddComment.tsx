import { Button, TextField } from "@mui/material";
import axios from "axios";
import { FunctionComponent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { SinglePostContext } from "../../contexts/SinglePostContext";
import { ISinglePostContext } from "../../types/posts";
 
const AddComment: FunctionComponent = () => {
    const { post, addComment } = useContext(SinglePostContext) as ISinglePostContext;
    const [body, setBody] = useState<string>();

    const handleClick = async () => {
        try {
            const response = await axios.post(`http://localhost:3001/comments`, {body, post_id: post?.id});
            addComment(response.data);
            setBody('');
            toast.success('Comment added successfully');
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
            <TextField
                fullWidth
                id="comment-body"
                label="Add Comment"
                name="body"
                multiline
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <Button
                variant="contained"
                sx={{ mt: 3, mb: 2 , float: 'right'}}
                onClick={handleClick}
            >
                Add Comment
            </Button>
        </>
    );
}
 
export default AddComment;