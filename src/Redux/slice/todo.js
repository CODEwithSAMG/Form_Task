import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const resulte = response.json();
    return resulte;
})

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        // builder.addCase(fetchTodos.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.data = action.payload
        // });
    }
})

export default todoSlice.reducer;