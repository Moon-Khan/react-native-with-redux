// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store'; 
import Counter from './counter';
import { View, Text, Button } from 'react-native';


const App = () => {
  return (
    <View>
      <Provider store={store}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Redux Counter App</Text>
        <Counter />
      </Provider>
    </View>
  );
};
export default App;

