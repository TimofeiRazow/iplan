import React, {useState} from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

export function AddTodo({ addTodo })  {
    
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                value={task}
                onChangeText={setTask} />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};
    
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
        borderRadius: 5,
    }
});