import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen382759Navigator from '../features/BlankScreen382759/navigator';
import BlankScreen282758Navigator from '../features/BlankScreen282758/navigator';
import BlankScreen182757Navigator from '../features/BlankScreen182757/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen382759: { screen: BlankScreen382759Navigator },
BlankScreen282758: { screen: BlankScreen282758Navigator },
BlankScreen182757: { screen: BlankScreen182757Navigator },

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
