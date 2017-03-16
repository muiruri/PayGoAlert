package com.paygo.alerts.model;

import java.sql.Timestamp;

/**
 * Created by kenny on 14/03/2017.
 *
 * This class represents the Alert database table.
 */
public class Alert {

    /**
     *  The id of the alert: Auto generated in the database.
     */
    Integer id;
    /**
     *  The id of the device that sent the alert
     */
    private String deviceId;
    /**
     *  The timestamp of when the alert was sent
     */
    private Timestamp timeStamp;
    /**
     *  The type of Alert
     */
    private String type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
