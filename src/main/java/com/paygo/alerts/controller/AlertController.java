package com.paygo.alerts.controller;

import com.paygo.alerts.model.Alert;
import com.paygo.alerts.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by kenny on 14/03/2017.
 */
@RestController
@RequestMapping("/api/alert")
public class AlertController {

    @Autowired
    private AlertService alertService;

    /**
     *  This end-point receives and {@link Alert} and saves it to the database.
     * @param alert - The alert being received.
     */
    @RequestMapping(value = "/receive", method = RequestMethod.POST)
    public @ResponseBody String receiveAlert(@RequestBody Alert alert) {
        try {
            alertService.processAlert(alert);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "error";
    }
}
