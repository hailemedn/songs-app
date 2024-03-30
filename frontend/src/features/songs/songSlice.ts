import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        reset: (state) => initialState,
    }
})

export const { reset } = songSlice.actions
export default songSlice.reducer