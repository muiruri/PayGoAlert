package com.paygo.alerts.service;

/**
 * Created by kenny on 14/03/2017.
 */

public interface NotificationService {

    /**
     *  This function sends a notification about the leakage
     *  to the owner and PayGo
     * @param emails
     */
    void sendEmail(String... emails);
}
