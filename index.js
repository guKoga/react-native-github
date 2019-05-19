/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/*
    Pega um componente e registra como o principal da app
 */
AppRegistry.registerComponent(appName, () => App);
