import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './models/app'
import HomeModel from './models/home'
import MessageModel from './models/message'
import AddTravels from './models/addTravels'
import travelsListModel from './models/travelsList'
import mineModel from './models/mine'
import detaileModel from './models/detaile'
import SearchModel from './models/search'

const app = dva({
  initialState: {},
  models: [
    appModel,
    HomeModel,
    MessageModel,
    AddTravels,
    travelsListModel,
    mineModel,
    detaileModel,
    SearchModel
  ],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

AppRegistry.registerComponent('Travels', () => App)
