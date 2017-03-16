package com.paygo.alerts.service;

import com.paygo.alerts.dao.AlertDao;
import com.paygo.alerts.model.Alert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional
    public void processAlert(Alert alert) {
        alertDao.saveAlert(alert);

        String[] emails = {"joywovids@gmail.com"};
        notificationService.sendEmail(emails);
    }

    @Override
    public List getAlerts() {
        return alertDao.fetchAlerts();
    }
}
