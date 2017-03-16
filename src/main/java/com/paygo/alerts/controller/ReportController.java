package com.paygo.alerts.controller;

import com.paygo.alerts.model.Alert;
import com.paygo.alerts.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by kenny on 14/03/2017.
 */
@RestController
@RequestMapping("api/report")
public class ReportController {

    @Autowired
    private AlertService alertService;

    /**
     *  This endpoint loads a list of all the alerts that have been received
     * @return {@link List<Alert>}
     */
    @RequestMapping(value = "/v1/getAlerts", method = RequestMethod.GET)
    public @ResponseBody List<Alert> getAlerts() {
        try {
            List<Alert> alertList = alertService.getAlerts();
            return alertList;
        } catch (Exception e) {

        }
        return null;
    }
}
