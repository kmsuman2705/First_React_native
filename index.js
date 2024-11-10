/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import App from './AppPro';

import { name as appName } from './app.json';
import AppPro from './AppPro';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppPro);
