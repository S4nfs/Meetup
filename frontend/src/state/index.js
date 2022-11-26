import { StarRate } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    mode: "Light",
    user: null,
    token: null,
    posts: []
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null,
                state.token = null
        },
        setFriends: (state, action) => {
            if (State.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.log("user friends non existent :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.posts_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        }
    }
})