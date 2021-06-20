import { createStore } from 'redux'
import cartReducers from '../cartReducers/cartReducers'

const store = createStore(cartReducers)

export default store