import * as types from '../types'
import Axios from 'axios'

export const fetchnotifications = () => async dispatch => {
  const baseUrl = 'http://localhost:3001/notifications'
  const notifications = await Axios.get(baseUrl).then(response => {
    return response
  })
  dispatch({
    type: types.GET_NOTIFICATIONS,
    payload: notifications.data
  })
}

export const openclosenotifications = () => async dispatch => {
  dispatch({
    type: types.OPEN_NOTIFICATIONS,
    payload: {}
  })
}
