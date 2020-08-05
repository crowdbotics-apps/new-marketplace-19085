import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1487570Navigator from '../features/BlankScreen1487570/navigator';
import BlankScreen1387479Navigator from '../features/BlankScreen1387479/navigator';
import BlankScreen1084938Navigator from '../features/BlankScreen1084938/navigator';
import BlankScreen1184937Navigator from '../features/BlankScreen1184937/navigator';
import BlankScreen1284936Navigator from '../features/BlankScreen1284936/navigator';
import BlankScreen883104Navigator from '../features/BlankScreen883104/navigator';
import BlankScreen983103Navigator from '../features/BlankScreen983103/navigator';
import BlankScreen683012Navigator from '../features/BlankScreen683012/navigator';
import BlankScreen783011Navigator from '../features/BlankScreen783011/navigator';
import BlankScreen583006Navigator from '../features/BlankScreen583006/navigator';
import BlankScreen482964Navigator from '../features/BlankScreen482964/navigator';
import BlankScreen382759Navigator from '../features/BlankScreen382759/navigator';
import BlankScreen282758Navigator from '../features/BlankScreen282758/navigator';
import BlankScreen182757Navigator from '../features/BlankScreen182757/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1487570: { screen: BlankScreen1487570Navigator },
BlankScreen1387479: { screen: BlankScreen1387479Navigator },
BlankScreen1084938: { screen: BlankScreen1084938Navigator },
BlankScreen1184937: { screen: BlankScreen1184937Navigator },
BlankScreen1284936: { screen: BlankScreen1284936Navigator },
BlankScreen883104: { screen: BlankScreen883104Navigator },
BlankScreen983103: { screen: BlankScreen983103Navigator },
BlankScreen683012: { screen: BlankScreen683012Navigator },
BlankScreen783011: { screen: BlankScreen783011Navigator },
BlankScreen583006: { screen: BlankScreen583006Navigator },
BlankScreen482964: { screen: BlankScreen482964Navigator },
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
