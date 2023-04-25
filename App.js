import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";
import { LogBox } from "react-native";
import Training from "./src/screens/Training";
import Sit from "./src/screens/Sit";
import Lie from "./src/screens/Lie";
import Home from "./src/screens/Home";
import Come from "./src/screens/Come";
import Stay from "./src/screens/Stay";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();




export default function App(props) {
  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];
  const Tab = createMaterialBottomTabNavigator();



<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Home" component={Home} />
{/* <Tab.Screen name="Search" component={SearchScreen} />
<Tab.Screen name="Notification" component={NotificationScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />*/}
</Tab.Navigator>
</NavigationContainer>


  // Ignore firebase v9 AsyncStorage warning
  React.useEffect(() => {
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    ]);
  }, []);

  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );

}

