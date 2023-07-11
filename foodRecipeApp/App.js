import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Login, Recipe, Bookmark, Search, Settings, Home } from "./screens";
import Tabs from "./navigation/tabs";
import { LogBox } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['ReactImageView: Image source "null"']);
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
