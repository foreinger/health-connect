package com.semper.plugins.healthconnect;

import android.util.Log;

public class HealthConnectPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
