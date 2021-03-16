import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'

import { notification, dialog } from './notificationReducer'
import { loggedIn } from './loginReducer'
import { account, bankAccount } from './accountReducer'
import { project, projects } from './projectReducer'
import { task, tasks } from './taskReducer'
import { team } from './teamReducer'
import { order, orders } from './orderReducer'
import { info } from './infoReducer'
import { preferences } from './preferencesReducer'
import { roles } from './userRoleReducer'
import { organizations, organization } from './organizationsReducer'
import { contact } from './contactReducer'

const reducers = combineReducers({
  notification,
  dialog,
  loggedIn,
  account,
  bankAccount,
  order,
  orders,
  project,
  projects,
  task,
  tasks,
  team,
  info,
  preferences,
  roles,
  organizations,
  organization,
  contact,
  intl: intlReducer
})

export default reducers
