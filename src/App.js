
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import CreateAdScreen from './screens/CreateAdScreen'
import HomeScreen from './screens/ListItemScreen'
import FlashScreen from './screens/FlashScreen'
import LoginSignup from './screens/LoginSignup';
import PersonalInfo from './screens/PersonalInfo'
import MyProfile from './screens/MyProfile';
import AccountScreen from './screens/AccountScreen';

import auth from  '@react-native-firebase/auth'

const theme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: '#326E62',
  },
};

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="skip" component={LoginSignup} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Login to Create' }} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="create" component={CreateAdScreen} />
      <Tab.Screen name="account" component={AccountScreen}  />
      <Tab.Screen name="persInfo" component={PersonalInfo} options={{ headerShown: false }} />
      {/* <Stack.Screen name="profile" component={MyProfile} options={{ title: 'Your Profile' }} /> */}
    </Tab.Navigator>
  )
}

const Navigation = () => {
  const [user, setUser] = useState('')
  useEffect(()=>{
    const unsubscribe = auth().onAuthStateChanged((UserExist)=>{
      if(UserExist){
           setUser(UserExist)
      }else{
           setUser("")
      }
    })
    return unsubscribe
  },[])
  return (
    <NavigationContainer>
        {user?<TabNavigator />: <AuthNavigator />}
     
    </NavigationContainer>
  )
}

const App = () => {

  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#326E62" />
        <View style={styles.container}>
          <Navigation />
          {/* <MyProfile /> */}
          {/* <FlashScreen /> */}
          {/* <PersonalInfo /> */}
          {/* < AccountScreen /> */}
        </View>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF9F0"
  }
});

export default App;
