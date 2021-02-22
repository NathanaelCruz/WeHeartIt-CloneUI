// import React from 'react'
import * as types from '../types'
const initialState = {
  open: false
}

export const menuWeHeartItReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MENUWEHEARTIT:
      return {
        ...state,
        open: !state.open
      }
    default:
      return state
  }
}
