import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUsers, postUsers, putUsers, deleteUsers } from "./api"

const initialState = {
    users: []
}

export const loadUsers = createAsyncThunk("getAllUsers", async () => {
    return await getUsers()
})

export const addUser = createAsyncThunk("addUser", async (user) => {
    return await postUsers(user)
})

export const updateUser = createAsyncThunk("updateUser", async (user) => {
    return await putUsers(user)
})

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
    await deleteUsers(id)
    return id
})

export const UserSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
        builder
            .addCase(addUser.fulfilled, (state, action) => {
                action.payload.id = Date.now().toString()
                state.users.push(action.payload)
            })
        builder
            .addCase(updateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload

            })
        builder
            .addCase(deleteUser.fulfilled, (state, action) => {
                const deletedUser = action.payload
                state.users = state.users.filter(user => user.id !== deletedUser)
            })
    }
})
export const userReducer = UserSlice.reducer