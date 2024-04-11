import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Book from "./screens/Book";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator:({current: {progress}}) =>{
              return{
                cardStyle:{
                  opacity: progress,
                }
              }
            }
          })}/>
          <Stack.Screen name="Search" component={Search} options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator:({current: {progress}}) =>{
              return{
                cardStyle:{
                  opacity: progress,
                }
              }
            }
          })}/>
          <Stack.Screen name="Book" component={Book} options={() => ({
            gestureEnabled: false,
            cardStyleInterpolator:({current: {progress}}) =>{
              return{
                cardStyle:{
                  opacity: progress,
                }
              }
            }
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
