package com.softserve.osbb.service;

import javax.mail.MessagingException;

import org.springframework.stereotype.Service;

import com.softserve.osbb.model.Mail;

/**
 * Created by Anastasiia Fedorak on 8/13/16.
 */
@Service
public interface MailSenderService {
    void send(String to, String subject, String text) throws MessagingException;
    void send(Mail mail) throws MessagingException;

}
