package com.paygo.alerts.service;

import org.springframework.stereotype.Service;

import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * Created by kenny on 14/03/2017.
 */
@Service
public class NotificationServiceImpl implements NotificationService {

    private static final Logger log = LogManager.getLogger(NotificationServiceImpl.class);

    @Override
    public void sendEmail(String... emails) {
        StringBuilder builder = new StringBuilder().append("Hey there, \n\nThere seems to be a gas leak. ")
                .append("\n\n. Send someone to check it out.");
        sendEmailSimple(builder.toString(), emails);
    }

    /**
     *  Send an email to the user with the given email address
     * @param messageText - The email content
     * @param to - The recipients email address
     * @return boolean with true for sucess and false for failure.
     */
    public boolean sendEmailSimple(String messageText, String... to) {
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class",
                "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");


        Session session = Session.getDefaultInstance(props,
                null);
        try {
            InternetAddress[] sendTo = new InternetAddress[to.length];
            for(int i = 0; i < to.length; i++) {
                sendTo[i] = InternetAddress.parse(to[i])[0];
            }

            javax.mail.Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("from@no-spam.com"));
            message.setRecipients(javax.mail.Message.RecipientType.TO, sendTo);
            message.setSubject("Gas leak alert");
            message.setText(messageText);

            Transport transport = session.getTransport("smtp");
            transport.connect("smtp.gmail.com", "kylekinyua99@gmail.com", "kinyua99");
            transport.sendMessage(message, message.getAllRecipients());
            return true;
        } catch (MessagingException e) {
            log.error("Error sending email.");
        }
        return false;
    }
}
