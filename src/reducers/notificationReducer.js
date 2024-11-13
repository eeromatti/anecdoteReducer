import { createSlice } from '@reduxjs/toolkit'

const notificationAtStart = 'saved message'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: notificationAtStart,
    reducers: {
        showNotification(state, action) {
            return action.payload
        }
    }
})

export const { showNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer