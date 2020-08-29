import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1995240Navigator from '../features/BlankScreen1995240/navigator';
import BlankScreen1895239Navigator from '../features/BlankScreen1895239/navigator';
import ArticleList95238Navigator from '../features/ArticleList95238/navigator';
import Maps95225Navigator from '../features/Maps95225/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1995240: { screen: BlankScreen1995240Navigator },
BlankScreen1895239: { screen: BlankScreen1895239Navigator },
ArticleList95238: { screen: ArticleList95238Navigator },
Maps95225: { screen: Maps95225Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
