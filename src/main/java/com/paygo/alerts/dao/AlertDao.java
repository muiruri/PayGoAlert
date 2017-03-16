package com.paygo.alerts.dao;

import com.paygo.alerts.model.Alert;

import java.util.List;

/**
 * Created by kenny on 14/03/2017.
 */
public interface AlertDao {

    /**
     *  Saves and alert to the database.
     * @param alert
     * @return
     */
    Integer saveAlert(Alert alert);

    /**
     *  Fetches alerts from the database.
     * @return
     */
    List fetchAlerts();
}
