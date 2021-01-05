/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-01-04 18:57:51
 * @LastEditTime: 2021-01-04 21:19:49
 * @LastEditors: Lewis
 */
import {createStore} from 'redux'
import rootReducer from '../reducers'

export default store=createStore(rootReducer)