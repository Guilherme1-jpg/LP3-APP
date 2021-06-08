import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditNoteScreen';

const MainStack = createStackNavigator ();

export default () =>(
  <MainStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#1e90ff'
    },
    headerTintColor: '#FFF'
  }}>
      <MainStack.Screen name ="listagem" component={ListScreen} />
      <MainStack.Screen name="EdicaodeNota" component={EditNoteScreen}/>
  </MainStack.Navigator>
);