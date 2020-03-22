import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
//import SearchScreen from './src/screens/SearchScreen';
//import QR from './src/screens/QR';
import BoxScreen from './src/screens/BoxScreen';
import SearchScreen from './src/screens/SearchScreen';
import Onboarding from './src/screens/Onboarding';
import Settings from './src/screens/Settings';
//import Home from './src/screens/Hoe';
//import Profile from './src/screens/Profile';
//import Hoe from './src/screens/Hoe';
import login from './src/Components/login/login';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Box:BoxScreen,
    Search:SearchScreen,
   /// Onboard:Onboarding,
    Set:Settings,
    Login:login,
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
