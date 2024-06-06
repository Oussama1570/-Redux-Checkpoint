// import createStore
import {createStore} from 'redux'

// import rootReducer
import rootReducer from '../Reducers'

// create store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store