import { FormEvent, FunctionComponent, useState } from "react";
import Container from '@mui/material/Container';
import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost: FunctionComponent = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const post = { title, body };

        try {
            await axios.post('http://localhost:3001/posts', { ...post });
            toast.success('Post created successfully');
            navigate('/posts');
        } catch (e: any) {
            if(e.response?.status === 400) {
                e.response.data.errors?.map((error: {msg: string}) => toast.error(error.msg));
            } else {
                toast.error('Some Error Happened!');
            }
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Typography component="h1" variant="h5">
                    Create Post
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoComplete="title"
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                    required
                    fullWidth
                    id="body"
                    label="Body"
                    name="body"
                    multiline
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Create
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
 
export default CreatePost;