package com.softserve.osbb.service;

import com.softserve.osbb.model.ContactOsbb;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by afedorak on 12.01.2017.
 */
@Service
public interface ContactOsbbService {
    public List<ContactOsbb> getAllOsbbContacts();
    public List<ContactOsbb> getManagementOsbbContacts();
    public List<ContactOsbb> getOsbbContacts();
    public ContactOsbb getManagementOsbbHeadContacts();
    public List<ContactOsbb> getManagementOsbbMemberContacts();

}
