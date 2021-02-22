import axios from 'axios'
import * as types from '../types'

export const fetchposts = () => async dispatch => {
  const baseUrl = 'http://localhost:3001/new-posts'
  const Posts = await axios.get(baseUrl).then(response => {
    return response
  })

  dispatch({
    type: types.GET_POSTS,
    payload: Posts.data
  })
}
