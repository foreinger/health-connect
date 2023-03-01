package com.semper.plugins.healthconnect

import android.util.Log

class HealthConnect {
    fun echo(value: String?): String? {
        Log.i("Echo", value!!)
        return value
    }
}