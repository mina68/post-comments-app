import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import PostsList from "./pages/PostsList";
import ViewPost from "./pages/ViewPost";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import PostsContextProvider from "./contexts/PostsContext";
import Nav from "./components/Nav";
import SinglePostContextProvider from "./contexts/SinglePostContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Nav/>

        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/posts" element={
            <PostsContextProvider>
              <PostsList />
            </PostsContextProvider>} />

          <Route path="/posts/create" element={<CreatePost />} />

          <Route path="/posts/:id" element={
            <SinglePostContextProvider>
              <ViewPost />
            </SinglePostContextProvider>} />

          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
