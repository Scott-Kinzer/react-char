import { combineReducers, createStore } from 'redux'
import {colorReducer} from "./reducers/changeBtnReducer"
let rootReducer = combineReducers({
    btnTheme: colorReducer
})

export let store = createStore(rootReducer)