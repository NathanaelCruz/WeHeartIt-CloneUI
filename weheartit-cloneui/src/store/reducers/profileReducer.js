// import React from 'react'
import * as types from '../types'
const initialState = {
  profile: [],
  open: false
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_PROFILE:
      return {
        ...state,
        open: !state.open
      }
    case types.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        open: state.open
      }
    default:
      return state
  }
}
