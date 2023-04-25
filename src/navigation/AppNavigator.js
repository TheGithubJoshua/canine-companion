import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthProvider";

// Main
import Home from "../screens/Home";
import Training from "../screens/Training";
import Sit from "../screens/Sit";
import Lie from "../screens/Lie";
import Come from "../screens/Come";
import Stay from "../screens/Stay";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";

import Loading from "../screens/utils/Loading";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyB50ZxHSd7sKTwOMHirYgxAvMxJlQy0WKo",
  authDomain: "canine-companion-543a8.firebaseapp.com",
  projectId: "canine-companion-543a8",
  storageBucket: "canine-companion-543a8.appspot.com",
  messagingSenderId: "668629812686",
  appId: "1:668629812686:web:2f65352648b945b227179f",
};
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Training" component={Training} />
      <MainStack.Screen name="Sit" component={Sit} />
      <MainStack.Screen name="Lie" component={Lie} />
      <MainStack.Screen name="Come" component={Come} />
      <MainStack.Screen name="Stay" component={Stay} />
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
