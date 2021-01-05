/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-01-04 20:12:46
 * @LastEditTime: 2021-01-04 23:13:17
 * @LastEditors: Lewis
 */
let nextId=0
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
    return[ 
        ...state,
        {
          id: nextId++,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    default:
      return state;
  }
};
export default todos;
