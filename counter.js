// counter.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Redux/slice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Counter: {counter}</Text>
      <Button title="Increment by 5" onPress={() => dispatch(increment(5))} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default Counter;
