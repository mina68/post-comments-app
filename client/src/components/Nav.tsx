import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Nav: FunctionComponent = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/posts">
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Posts
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/posts/create">
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                New Post
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
 
export default Nav;