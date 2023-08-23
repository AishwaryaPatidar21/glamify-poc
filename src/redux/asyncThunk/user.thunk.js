import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const response = await axios.get(`https://reqres.in/api/users/`)
    return response.data
})