package com.geek;

import com.facebook.react.ReactActivity;

import android.os.Bundle; 
import org.devio.rn.splashscreen.SplashScreen; 

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
     return "geek";  }
       @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
  }

