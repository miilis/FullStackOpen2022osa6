import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationReducer(state, action) {
      return action.payload
    },
    removeNotificationReducer(state, action) {
      return ''
    }
  }
})

export const {setNotificationReducer, removeNotificationReducer} = notificationSlice.actions

export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch(setNotificationReducer(message))
    setTimeout(() => {
      dispatch(removeNotificationReducer())
    }, 1000*seconds)
  }
}

export default notificationSlice.reducer