import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TodoItem } from './TodoItem';

export function TodoList ({ todos, removeTodo }) {
  return (
    <View>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </View>
  );
};
