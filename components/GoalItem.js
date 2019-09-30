import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (     
  <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
    <View style={styles.list}>
    <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>  
  );
};

const styles = StyleSheet.create({
    list: {
      padding: 20,
      marginVertical: 10,
      backgroundColor: 'grey'
    }
});

export default GoalItem;