import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { IPostsContext } from "../../types/posts";
import PostsTableItem from "./PstsTableItem";

 
const PostsTable: FunctionComponent = () => {
    const { posts } = useContext(PostsContext) as IPostsContext;

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 , my:2}} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center"> Title</StyledTableCell>
                    <StyledTableCell align="center"> Created at</StyledTableCell>
                    <StyledTableCell align="center"> Options</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {posts?.map((post) => (
                    <PostsTableItem key={post.id} post={post} />
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
 
export default PostsTable;