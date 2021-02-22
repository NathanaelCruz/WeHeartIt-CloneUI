// import React from 'react'
import * as types from '../types'
const initialState = {
  notifications: [],
  open: false
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_NOTIFICATIONS:
      return {
        ...state,
        open: !state.open
      }
    case types.GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
        open: state.open
      }
    default:
      return state
  }
}
