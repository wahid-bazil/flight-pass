import { configureStore } from '@reduxjs/toolkit';

import authReducer, { InitialAuthState } from './auth';

import homeReducer, { InitialHomeState } from './home';
import portletReducer, { InitialPortletState } from './portlet';
import configurationReducer, { InitialConfigtate } from './configuration';



export interface Istate {
  auth: InitialAuthState
  home: InitialHomeState,
  portlet: InitialPortletState,
  configuration:InitialConfigtate
}

const store = configureStore({
  reducer: { auth: authReducer, home: homeReducer, portlet: portletReducer ,configuration:configurationReducer},
});

export default store;