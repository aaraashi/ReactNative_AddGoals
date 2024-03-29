import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { id: Math.random().toString(), value: goalTitle} 
    ]); //... spread operator 
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalHandler =() => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} 
      onAddGoal={addGoalHandler}
      onCancel={cancelGoalHandler} />
      <FlatList 
      keyExtractor={(item, index) => item.id} // defalt logic
      data={courseGoals} 
      renderItem={itemData => 
        <GoalItem 
        id={itemData.item.id}
        onDelete={removeGoalHandler} 
        title={itemData.item.value} />
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
