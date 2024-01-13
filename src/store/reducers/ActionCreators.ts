import axios from "axios"
import { IUser } from "../../models/IUsers"
import { createAsyncThunk } from "@reduxjs/toolkit/react"

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.userFetchingSuccess(response.data))
//     } catch (error) {
//         if (error instanceof Error) {
//             dispatch(userSlice.actions.userFetchingError(error.message))
//         }
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(`${error.message}`)
            }
        }
    }
)