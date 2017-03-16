package com.paygo.alerts.service;

import com.paygo.alerts.dao.AlertDao;
import com.paygo.alerts.model.Alert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by kenny on 14/03/2017.
 */
@Service
public class AlertServiceImpl implements AlertService {

    @Autowired
    private AlertDao alertDao;

    @Autowired
    private NotificationService notificationService;

    @Override
    public void processAlert(Alert alert) {
        alertDao.saveAlert(alert);

        notificationService.sendEmail("");
    }

    @Override
    public List getAlerts() {
        return alertDao.fetchAlerts();
    }
}
