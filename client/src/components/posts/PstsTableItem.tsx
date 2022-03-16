import { Button, styled, TableCell, tableCellClasses, TableRow } from "@mui/material";
import axios from "axios";
import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PostsContext } from "../../contexts/PostsContext";
import { IPost, IPostsContext } from "../../types/posts";

interface PostsTableItemProps {
    post: IPost;
}
 
const PostsTableItem: FunctionComponent<PostsTableItemProps> = ({ post }) => {

    const { deletePost } = useContext(PostsContext) as IPostsContext;

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3001/posts/${id}`);
            deletePost(id);
            toast.success('Post deleted successfully');
        } catch (e: any) {
            if(e.response?.status === 400) {
                e.response.data.errors?.map((error: {msg: string}) => toast.error(error.msg));
            } else {
                toast.error('Some Error Happened!');
            }
        }
    }

    return (
        <StyledTableRow key={post.id}>
            <StyledTableCell align="center">{post.title}</StyledTableCell>
            <StyledTableCell align="center">{post.created_at}</StyledTableCell>
            <StyledTableCell align="center">
                <Button variant="outlined" color="error" onClick={() => handleDelete(post.id)}>Delete</Button>
                <Link to={`/posts/${post.id}`}>
                    <Button variant="outlined">View</Button>
                </Link>
            </StyledTableCell>
        </StyledTableRow>
    );
}
 
export default PostsTableItem;