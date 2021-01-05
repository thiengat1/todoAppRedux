/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-01-04 21:52:51
 * @LastEditTime: 2021-01-04 23:14:35
 * @LastEditors: Lewis
 */
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
  <View style={{padding:20}}>
    {todos.map((todo) => (
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
          }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default TodoList;

const styles = StyleSheet.create({
  todoComplete: {
    fontSize: 24,
  },
});
