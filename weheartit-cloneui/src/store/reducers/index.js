import { combineReducers } from 'redux'
import { postReducer } from './postReducer'
import { notificationReducer } from './notificationReducer'
import { menuWeHeartItReducer } from './menuWeHeartItReducer'
import { profileReducer } from './profileReducer'

export default combineReducers({
  post: postReducer,
  notification: notificationReducer,
  profile: profileReducer,
  menuweheartit: menuWeHeartItReducer
})
