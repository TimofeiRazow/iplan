import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function TodoItem ({ todo, removeTodo }) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{todo.task}</Text>
      <Button title="Delete" onPress={() => removeTodo(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
  },
  todoText: {
    flex: 1,
  },
});

