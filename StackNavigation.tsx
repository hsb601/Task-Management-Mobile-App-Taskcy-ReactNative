import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './pages/login';
import SignupScreen from './pages/signup';
import Slider from './pages/sliders';
import Intro from './pages/intro';
import HomeScreen from './pages/home';
// import GifBackground from './pages/splash';
import AboutScreen from './pages/about';
import React,{useEffect,useState} from 'react';
// import { useUserData } from './pages/authHelpers';
const CustomTabBarButton = ({ accessibilityState, children, onPress }) => {
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: focused ? 'mediumpurple' : 'transparent',
      }}
    >
      {children}
    </TouchableOpacity>
  );
};
const Tab = createBottomTabNavigator();
const StackNavigation = () => {
 const [isLogged, setIsLogged] = useState(false);
  return (
    <Tab.Navigator  initialRouteName={isLogged ? 'Home' : 'Intro'}
    screenOptions={{
                          tabBarShowLabel: false,
                          tabBarStyle: {
                            display: 'flex',
                          },
                          headerStyle: {
                            backgroundColor: 'white',
                          },
                          headerTintColor: 'white',
                          headerTitleAlign: 'center',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'black',
                          },
                        }}
    >


 <Tab.Screen
                 name="About"
                 component={AboutScreen}
                 options={{ headerShown: true, tabBarStyle: { display: 'none' },
                                                                         tabBarVisible: false, }} // Hide the header for this screen
               />
         <Tab.Screen
                 name="Intro"
                 component={Intro}
                 options={{ headerShown: false, tabBarStyle: { display: 'none' },
                                                                         tabBarVisible: false, }} // Hide the header for this screen
               />
       <Tab.Screen
              name="Learn more"
              component={Slider}
              options={{ headerShown: false,tabBarStyle: { display: 'none' },
                                                                     tabBarVisible: false, }} // Hide the header for this screen
            />
        <Tab.Screen
               name="Login"
               component={LoginScreen}
               options={{ headerShown: false,tabBarStyle: { display: 'none' },
                                                                      tabBarVisible: false, }} // Hide the header for this screen
             />
              <Tab.Screen
                     name="Signup"
                     component={SignupScreen}
                     options={{ headerShown: false,tabBarStyle: { display: 'none' },
                                                                            tabBarVisible: false, }} // Hide the header for this screen
                   />
    </Tab.Navigator>

  );
};

export default StackNavigation;
//   <Tab.Screen
//               name="Splash"
//               component={GifBackground}
//               options={{ headerShown: false, tabBarStyle: { display: 'none' },
//                                                                       tabBarVisible: false, }} // Hide the header for this screen
//             />