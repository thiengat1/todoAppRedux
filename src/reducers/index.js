/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-01-04 21:13:10
 * @LastEditTime: 2021-01-04 21:16:12
 * @LastEditors: Lewis
 */
import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
export default combineReducers({
    todos,
    visibilityFilter
})