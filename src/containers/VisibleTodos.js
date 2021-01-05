/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-01-04 22:06:00
 * @LastEditTime: 2021-01-04 22:18:15
 * @LastEditors: Lewis
 */
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps=state=>({
    todos:state.todos
})
const mapDispatchToProps=dispatch=>({
    toggleTodo:id=>dispatch({
        type:'TOGGLE_TODO',id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);