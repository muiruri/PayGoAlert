package com.paygo.alerts.service;

import com.paygo.alerts.model.Alert;

import java.util.List;

/**
 * Created by kenny on 14/03/2017.
 */
public interface AlertService {

    /**
     *  Processes an {@link Alert}
     *      - Saves the alert to the database
     *      - Sends a notification to the owner and PayGo
     * @param alert
     */
    void processAlert(Alert alert);

    /**
     *  Loads the alerts that have been received.
     * @return
     */
    List getAlerts();
}
