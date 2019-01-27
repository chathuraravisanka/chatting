import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

var config = {
  apiKey: "AIzaSyBxMRM9gmx7e_mIDoPuRc_BFzAV0518QI8",
  authDomain: "chat-9f164.firebaseapp.com",
  databaseURL: "https://chat-9f164.firebaseio.com",
  projectId: "chat-9f164",
  storageBucket: "chat-9f164.appspot.com",
  messagingSenderId: "229797572120"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);


      
    }
  }


